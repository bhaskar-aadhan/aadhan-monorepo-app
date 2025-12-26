export const getArticleCategories = async (
    url: string,
    token: string
) => {
    const apiInit = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "token": "Bearer " + token
        }
    }
    let data = {
        success: true,
        message: 'news_search found successfully',
        data: []
    };
    const response = await fetch(`${url}/news-section/web/getallcategories?language_id=2&status=active`, apiInit);
    if (!response.ok) {
        console.log('categories: no data found')
        return data;
    }
    data = await response.json();
    return data;
}

export const getAllArticleCategories = async (
    url: string,
    token: string
) => {
    const apiInit = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "token": token
        }
    }
    let data = {
        success: true,
        message: 'Articles found successfully',
        data: []
    };
    const response = await fetch(`${url}/web/articlesbycategory?language_id=2`, apiInit);
    if (!response.ok) {
        console.log('categories: no data found')
        return data;
    }
    data = await response.json();
    return data;
}

export const getArticle = async (
    url: string,
    token: string,
    articleId: string
) => {
    const apiInit = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "token": token
        }
    }
    let data = {
        success: true,
        message: 'Article found successfully',
        data: []
    };
    const response = await fetch(`${url}/web/articles/${articleId}`, apiInit);
    if (!response.ok) {
        console.log('categories: no data found')
        return data;
    }
    data = await response.json();
    return data;
}