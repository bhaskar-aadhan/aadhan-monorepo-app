import { Link, useNavigate } from 'react-router';
import type { IconType } from 'react-icons';
import ImageRender from '~/shared/ImageRender';
import { tabsData } from '../../configs/index.config';
import { NativeSelect, NativeSelectOption } from '@repo/ui';

interface TabData {
    id: number;
    label: string;
    route: string;
    icon: IconType;
    isSelection: boolean;
    options: Array<{ label: string; value: string }>;
}

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
            <div className="bg-white rounded-[20px] border-t border-l border-r border-black border-b-4 border-b-black shadow-[4px_4px_4px_rgba(0,0,0,0.25)] h-[72px] flex items-center justify-between px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <ImageRender src="aadhan.svg" className='size-14' />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 mx-auto">
                    {tabsData.map((tab: TabData) => {
                        // Filter out empty options
                        const validOptions = tab.options.filter(opt => opt.label && opt.value);

                        if (tab.isSelection && validOptions.length > 0) {
                            return (
                                <NativeSelect
                                    key={tab.id}
                                    onChange={(e) => navigate(e.target.value)}
                                    defaultValue=""
                                    className="font-medium"
                                >
                                    <NativeSelectOption value="" disabled>
                                        {tab.label}
                                    </NativeSelectOption>
                                    {validOptions.map((option, index) => (
                                        <NativeSelectOption key={index} value={option.value}>
                                            {option.label}
                                        </NativeSelectOption>
                                    ))}
                                </NativeSelect>
                            );
                        }

                        return (
                            <Link
                                key={tab.id}
                                to={tab.route}
                                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors font-medium"
                            >
                                <span>{tab.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
