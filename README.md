# jQueryLoader
Chrome extension to load jQuery in any website, even unwilling ones!

# Setup
1. clone/download & unzip to a local directory, for example: D:\chrome_extensions\jQueryLoader
2. in Chrome, go to: "More tools" -> "Extensions"
3. enable developer mode, so now you can install an extension stored locally, you do not have to install it from Chrome Web Store
4. click "Load unpacked", navigate to the local directory you chose at step 1, validate
5. now you should see the jQueryLoader extension added to Chrome extensions panel. To unistall from Chrome extensions, click "Remove"

# Check install
To check that jQuery is now loaded in every website, go for instance to Instagram, open console (F12), 
typeof jQuery == 'function'
should return true.
