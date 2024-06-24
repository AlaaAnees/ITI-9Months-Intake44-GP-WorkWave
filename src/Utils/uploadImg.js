const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "workWave");
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diilyjcff/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const dataUrl = await res.json();
    // console.log(dataUrl, "cloud");

    return dataUrl.secure_url;
  } catch (err) {
    // console.log(err);
    return null;
  }
};

export default upload;
