const handleImage = (img) => {
  if (img === null) {
    return 'https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_1280.jpg';
  }
  return img;
};

export default handleImage;
