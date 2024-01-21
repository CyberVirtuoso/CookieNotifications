import './index.css';
import {addLocalStorage, getLocalStorage} from "./src/modules/localStorage";
import {COOKIE_ACCEPT} from "./src/core/constans/settings";

const cookie_accept = getLocalStorage(COOKIE_ACCEPT);
if(!cookie_accept)
{
    const buttonAcceptCookie = document.querySelector('.cookie-consent__button');
    buttonAcceptCookie.addEventListener('click', buttonCallback);
}
else
{
    const blockCookie = document.querySelector('.cookie-consent');
    blockCookie.style.visibility = 'hidden';
}

function buttonCallback(event)
{
    const blockCookie = event.target.offsetParent;
    blockCookie.style.visibility = 'hidden';
    addLocalStorage(COOKIE_ACCEPT, 'true');
}

