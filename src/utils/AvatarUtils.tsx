function randomAvatarColor() {
    let index = Math.floor(Math.random() * userAvatarColors().length)
    return userAvatarColors()[index]
}

function userAvatarColors() {
    return [
        '#a1251d',
        '#9c27b0',
        '#662272',
        '#5f166b',
        '#5f116c',
        '#673ab7',
        '#3f51b5',
        '#1a6fb6',
        '#1589bd',
        '#00818f',
        '#009688',
        '#17831b',
        '#0a670c',
        '#064909',
        '#124f13'
    ]
}

export default randomAvatarColor;