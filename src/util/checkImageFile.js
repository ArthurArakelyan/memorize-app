const checkImageFile = (files, callback) => {
  if(files && files[0]) {
    if(files[0].size > 5000000) {
      alert('No more 5MB file size!');
      return false;
    }

    if(!files[0].type.includes('image')) {
      alert('Only image type files');
      return false;
    }

    callback();
  }
}

export default checkImageFile;