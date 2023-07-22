# PHASE 2 PROJECT
# Verlan Dictionary

For this project Eddie, my partner, and I decided to make a small dictionary website for the French slang, Verlan. While I was able to find one website with a more comprehensive list of Verlan it was only for French, and part of the goal was to make it more accessible for English speakers. Unfortunately that means we are doing the translation as it is very idiomatic so using a translation tool without context made a lot of the translations inaccurate. So the turn to English feature is not functional for the whole site.

Using react routing I made a navbar with links that enables the user to go to either the full dictionary, an examples page or just the home page. Also in the navbar are two buttons that allow the user to switch the navigation from French to English, those click events control a state that is in the Root.jsx component and then passed to the other children through Outlet which is a curveball to start using after learning routing on Monday but once implemented was obviously very useful.

The search bar is not fully functional in both French and English yet as I did not realize til after that I needed to at least have an empty string for the key "english" but as not currently one can only search in French. I plan on fixing that, perhaps with a default value telling the user we do not have a definition yet and inviting them to submit their own with a patch.
