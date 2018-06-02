
// #region keymaps 
map('gt', 'T');

// #endregion

// #region emoji
settings.startToShowEmoji = 0;
iunmap(':');

// #endregion

// #region theme
settings.theme = `
.sk_theme {
    background: #000;
    color: #fff;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d9dce0;
}
.sk_theme .url {
    color: #2173c5;
}
.sk_theme .annotation {
    color: #38f;
}
.sk_theme .omnibar_highlight {
    color: #fbd60a;
}
.sk_theme ul>li:nth-child(odd) {
    background: #1e211d;
}
.sk_theme ul>li.focused {
    background: #4ec10d;
}`;

// #endregion

// #region searchalias
addSearchAliasX('ex', 'Chrome Extension', 'https://chrome.google.com/webstore/search/');
addSearchAliasX('nm', 'Namu Wiki', 'https://namu.wiki/go/');
addSearchAliasX('mr', 'Maven Repository', 'https://mavenrepository.com/search?q=');
addSearchAliasX('tt', 'Torrentz2', 'https://torrentz2.eu/search?f=');
addSearchAliasX('tr', 'HDReactor', 'http://hdreactor.su/?do=search&subaction=search&x=0&y=0&title_only=3&fullsearch=0&story=');
addSearchAliasX('tb', 'RARBG', 'http://rarbg.is/torrents.php?search=');

// #endregion


