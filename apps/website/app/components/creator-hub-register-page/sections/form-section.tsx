import React from 'react'
import { useNavigate, Link } from '@remix-run/react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { verifyInfluencer } from '~/entity/influencer-form';
import { Spinner } from '@nextui-org/react';
import { IoClose } from "react-icons/io5";
import { influencerFormSchema, InfluencerFormtypes } from '~/entity/influencer-form/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValues } from '~/entity/influencer-form/defaults';
import { toast } from 'sonner';

type FormSectionProps = {
    apiUrl: string;
}

const FormSection = ({ apiUrl }: FormSectionProps) => {
    const navigate = useNavigate();

    const form = useForm<InfluencerFormtypes>({
        defaultValues,
        resolver: zodResolver(influencerFormSchema()),
    })
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting },
        reset,
        clearErrors,
        setError
    } = form

    const influencerApplicationMutation = useMutation({
        mutationFn: (data: any) => {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (Array.isArray(value) || typeof value === "object") {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value ?? "");
                }
            });

            const apiInit = {
                method: "POST",
                body: formData
            }
            return fetch(`${apiUrl}influencer_application`, apiInit)
        },
        onSuccess: () => {
            console.log('Influencer application submitted successfully')
        },
        onError: (error: any) => {
            console.error("Failed to submit influencer application:", error.message);
        },
    })

    const onError = async (error: FieldErrors<any>) => {
        console.log('Influencer Form Erros: : ', error)

    }

    const onSubmit = async (data: InfluencerFormtypes) => {
        console.log('fromData: ', data)
        try {
            clearErrors('root');
            const isVerifiedStatus = await verifyInfluencer(apiUrl, data.email);

            if (isVerifiedStatus === 409) {
                setError('email', {
                    type: 'manual',
                    message: 'You have already applied for this job'
                });
                return 'You have already applied for this job';
            }
            await influencerApplicationMutation.mutateAsync(data)
            toast.success('Application submitted successfully');
        } catch (error: any) {
            console.error('Submission failed:', error);
            setError('root', {
                type: 'manual',
                message: error.message ?? 'Failed to submit application'
            });
        }
    }

    React.useEffect(() => {
        if (isSubmitSuccessful && influencerApplicationMutation?.isSuccess) {
            reset();
            navigate('/creator-hub');
        }
    }, [isSubmitSuccessful, influencerApplicationMutation?.isSuccess, reset, navigate])

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className='max-w-xl mx-auto flex flex-col gap-3 py-10'>
            <div className='flex justify-end items-center'>
                <Link to="/creator-hub" className='text-xl cursor-pointer'>
                    <IoClose />
                </Link>
            </div>
            <h2 className='text-4xl font-medium text-center font-main bg_gradient_text mb-8'>I'm an Influencer</h2>
            <div className='grid grid-cols-1 xs:grid-cols-2 gap-5'>
                <label className='font-medium space-y-2' htmlFor="first_name">
                    <p>First Name</p>
                    <input
                        {...register('first_name', { required: 'First name is required' })}
                        type="text"
                        id="first_name"
                        className='border-2 w-full text-sm p-2 rounded-lg'
                    />
                    {errors.first_name && <p className='text-red font-normal text-xs'>{errors.first_name.message}</p>}
                </label>
                <label className='font-medium space-y-2' htmlFor="last_name">
                    <p>Last Name</p>
                    <input
                        {...register('last_name', { required: 'Last name is required' })}
                        type="text"
                        id="last_name"
                        className='border-2 w-full text-sm p-2 rounded-lg'
                    />
                    {errors.last_name && <p className='text-red font-normal text-xs'>{errors.last_name.message}</p>}
                </label>
            </div>
            <label className='font-medium space-y-2' htmlFor="address">
                <p>Address</p>
                <textarea
                    {...register('address', { required: 'Address is required' })}
                    id="address"
                    cols={30}
                    rows={3}
                    className='border-2 w-full text-sm p-2 rounded-lg'
                ></textarea>
                {errors.address && <p className='text-red font-normal text-xs'>{errors.address.message}</p>}
            </label>
            <label className='font-medium space-y-2' htmlFor="last_name">
                <p>Email</p>
                <input
                    {...register('email', { required: 'Email is required' })}
                    className='border-2 w-full text-sm p-2 rounded-lg'
                    type="email"
                    id="email"
                />
                {errors.email && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='form_error'
                    >
                        {errors.email.message}
                    </motion.p>
                )}
                {errors.email?.root && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='form_error'
                    >
                        {errors.email?.root?.message}
                    </motion.p>
                )}
            </label>
            <label className='font-medium space-y-2' htmlFor="phone_number">
                <p>Phone Number</p>
                <input
                    {...register('phone_number', { required: 'Phone number is required' })}
                    type="phone_number"
                    id="phone_number"
                    className='border-2 w-full text-sm p-2 rounded-lg'
                />
                {errors.phone_number && <p className='text-red font-normal text-xs'>{errors.phone_number.message}</p>}
            </label>
            <div className='font-semibold my-3'>Profile links <span className='text-red'>*</span></div>
            <div>
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-5 mb-5'>
                    <label className='font-medium space-y-2' htmlFor="fb_account_url">
                        <p>Facebook Account URL</p>
                        <input
                            {...register('fb_account_url', { required: 'Facebook Account URL is required' })}
                            type="text"
                            id="fb_account_url"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.fb_account_url && <p className='text-red font-normal text-xs'>{errors.fb_account_url.message}</p>}
                    </label>
                    <label className='font-medium space-y-2' htmlFor="fb_followers">
                        <p>Facebook followers</p>
                        <input
                            {...register('fb_followers', { required: 'Facebook followers is required' })}
                            type="text"
                            id="fb_followers"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.fb_followers && <p className='text-red font-normal text-xs'>{errors.fb_followers.message}</p>}
                    </label>
                </div>
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-5 mb-5'>
                    <label className='font-medium space-y-2' htmlFor="insta_account_url">
                        <p>Instagram Account URL</p>
                        <input
                            {...register('insta_account_url', { required: 'Instagram Account URL is required' })}
                            type="text"
                            id="insta_account_url"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.insta_account_url && <p className='text-red font-normal text-xs'>{errors.insta_account_url.message}</p>}
                    </label>
                    <label className='font-medium space-y-2' htmlFor="insta_followers">
                        <p>Instagram followers</p>
                        <input
                            {...register('insta_followers', { required: 'Instagram followers is required' })}
                            type="text"
                            id="insta_followers"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.insta_followers && <p className='text-red font-normal text-xs'>{errors.insta_followers.message}</p>}
                    </label>
                </div>
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-5 mb-5'>
                    <label className='font-medium space-y-2' htmlFor="yt_account_url">
                        <p>Youtube Channel URL</p>
                        <input
                            {...register('yt_account_url', { required: 'Youtube Channel URL is required' })}
                            type="text"
                            id="yt_account_url"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.yt_account_url && <p className='text-red font-normal text-xs'>{errors.yt_account_url.message}</p>}
                    </label>
                    <label className='font-medium space-y-2' htmlFor="yt_subscribers">
                        <p>Youtube subscribers</p>
                        <input
                            {...register('yt_subscribers', { required: 'Youtube subscribers is required' })}
                            type="text"
                            id="yt_subscribers"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.yt_subscribers && <p className='text-red font-normal text-xs'>{errors.yt_subscribers.message}</p>}
                    </label>
                </div>
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-5 mb-5'>
                    <label className='font-medium space-y-2' htmlFor="other_url">
                        <p>Other URL</p>
                        <input
                            {...register('other_url')}
                            type="text"
                            id="other_url"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.other_url && <p className='text-red font-normal text-xs'>{errors.other_url.message}</p>}
                    </label>
                    <label className='font-medium space-y-2' htmlFor="category">
                        <p>Category</p>
                        <input
                            {...register('category')}
                            type="text"
                            id="category"
                            className='border-2 w-full text-sm p-2 rounded-lg'
                        />
                        {errors.category && <p className='text-red font-normal text-xs'>{errors.category.message}</p>}
                    </label>
                </div>
            </div>
            {errors?.root && (
                <div className='flex items-center gap-2 text-red font-normal text-xs'>
                    <span className='text-red-500'>⚠️</span>
                    <span>{errors?.root.message}</span>
                </div>
            )}
            <div className='flex justify-end items-center'>
                <motion.button disabled={isSubmitting || influencerApplicationMutation.isPending} whileTap={{ scale: 0.85 }} className='btn font-medium bg_gradient text-white'>
                    {isSubmitting || influencerApplicationMutation.isPending ? <Spinner size='sm' /> : 'Save'}
                </motion.button>
            </div>
        </form>
    )
}

export default FormSection