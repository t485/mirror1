# T485 Mirror 1

This repository is a mirror of the main repository at [t485/t485](https://github.com/t485/t485/)

**Webmaster**: You should be updating this repository about every two weeks.

### To Update(For current webmaster):

1. Copy and paste all the code (overwriting everything) from [t485/t485](https://github.com/t485/t485/) EXCEPT this file `readme.md` and `js/t485.js`
You may want to save the two files somewhere, copy/paste, then overwrite the two files.


### To Use (For current webmaster):

If the current website at `t485/t485` has any bug that makes it unusable, you can redirect visitors to this repository while you fix the bugs.

1. Go to `js/t485.js` in the main repository [t485/t485](https://github.com/t485/t485/)
2. Set the variable `mode` to `"redirect"` and the variable `data` to `"https://mirror1.t485.org"`
3. The domain `https://www.t485.org` or `https://t485.org` will now be redirect to `https://mirror1.t485.org`
4. To fix bugs or access the website without being automatically redirected, add the query string `mirror-no-redirect=true` to the query string (For example: `https://www.t485.org/events.html?mirror-no-redirect=true`)
5. Don't forget to change the variables back in the main website once you fix the bugs!
