# brand-photos
A Photoshop script I quickly wrote in JS to overlay and center an image onto a set of input images and save them. This was made with the intent of being used to automatically watermark large volumes of photos.

Requires Adobe Photoshop.

To use, download the repository and delete all placeholder files in each of the 3 sub-folder. Then, place all images you want branded in the "Images" folder and place one image to be overlayed in the "Watermark" folder. Then, open Adobe Photoshop, and run "brand-photos.js" as a script (File > Scripts). The resulting images will be saved separately in the "Output" folder.

Some notes:

1. The "brand-photos.js" file as well as the other three folders must all be in the same directory.
2. Also, this script does not intelligently size the watermark image. You will have to size it yourself such that it will fit on all your images in a way that you like. If your input images are of all drastically varying sizes, you may have to do multiple batches (changing the size of the watermark image appropriately) or find another tool.
3. Ensure that you delete the placeholder files in all folders, particularly the "Images" folder. These files are just there so that GitHub actually commits the folders to the repository.
