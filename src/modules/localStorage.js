export function addLocalStorage(key, value)
{
    localStorage.setItem('cookie_accept', 'true');
}

export function getLocalStorage(key)
{
    return localStorage.getItem(key);
}