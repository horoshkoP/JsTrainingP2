# JsTrainingP2

A simple project, which lets you input song name and author and add it to the list. 
You can also clear the list, feature of removing single song is yet to be developed)

This project uses imports, Promises, async/await, classes.

in index1.js file there is an explanation of closure(scope?) of function canProceed(). 
The explanation states global lexical environment and both inner and outer lexical environments, i hope it was the point of this task)

To start the project, please download all the files into a single directory and launch index.html file. 
From this point, you'll know what to do, enter a name of the song into first input, author of the song into the second input and click 'add song' to add song to the list.
If you want to clear the list, just click the 'clear list' button.

in errorHandler.js file, there is basicaly a wrapper-function for Promise.catch() method, it is there strictly to satisfy the task's requirement of handling errors using a single 
function. Definitely not the best practice)

When adding a song to the list, app validates, whether the input is not blank, if not, the new SongItem object is created and added to SongList object.

That's basically it, in case there is some task i missed, or failed, please let me know.

Your time and effort are greatly appreciated!
