import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const BASE_URL = "https://workwave-vq08.onrender.com/api";
function Creategig() {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState(null);
  const [sliderImage, setSliderImage] = useState([]);
  function handleImages(e) {
    const file = URL.createObjectURL(e.target.files[0]);
    setCoverImage(file);
  }
  function handleSliderImages(e) {
    const files = e.target.files;
    const selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      selectedImages.push(URL.createObjectURL(files[i]));
    }
    setSliderImage(selectedImages);
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      shortTitle: "",
      shortDesc: "",
      desc: "",
      features: "",
      cat: "",
      deliveryTime: "",
      revisionNumber: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required()
        .min(4, "Title must be at least 4 char")
        .max(30, "Title must be less than  15 char"),
      shortTitle: Yup.string()
        .required()
        .min(4, "Title Short must be at least 4 char")
        .max(30, "Title Short must be less than  15 char"),

      shortDesc: Yup.string()
        .required()
        .min(4, "Short description must be at least 4 char")
        .max(30, "Short description must be less than  15 char"),
      desc: Yup.string()
        .required()
        .min(40, "Short description must be at least 40 char")
        .max(200, "Short description must be less than  200 char"),
      features: Yup.string().required(),
      cat: Yup.string().required(),
      deliveryTime: Yup.number().required(),
      revisionNumber: Yup.number().required(),
      price: Yup.number().required(),
    }),
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("eman");
    const formData = {
      ...formik.values,
      cover: coverImage,
      images: sliderImage,
    };
    console.log(formData);
    const res = await fetch(`${BASE_URL}/gigs`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    navigate(`/singlegig/${data._id}`);
  }
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-0 h-screen flex flex-col justify-center ">
        <h1 className="text-3xl text-[#595959] capitalize font-semibold   ">
          Add new gig
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 "
        >
          <div className="colll ">
            <div className="flex flex-col my-2 ">
              <label
                htmlFor="title"
                className="text-[#959595] text-lg capitalize"
              >
                Title:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]  "
                type="text"
                id="title"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.title}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="shortTitle"
                className="text-[#959595] text-lg capitalize"
              >
                shortTitle:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]  "
                type="text"
                id="shortTitle"
                name="shortTitle"
                onChange={formik.handleChange}
                value={formik.values.shortTitle}
                onBlur={formik.handleBlur}
              />
              {formik.touched.shortTitle && formik.errors.shortTitle ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.shortTitle}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="desc"
                className="text-[#959595] text-lg capitalize"
              >
                desc:
              </label>
              <textarea
                className="p-2 rounded-md border outline-none border-[#D0D0D0] resize-none "
                name="desc"
                id="desc"
                onChange={formik.handleChange}
                value={formik.values.desc}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.desc && formik.errors.desc ? (
                <div className="text-red-600 text-sm">{formik.errors.desc}</div>
              ) : null}
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="shortDesc"
                className="text-[#959595] text-lg capitalize"
              >
                shortDesc:
              </label>
              <textarea
                className="p-2 rounded-md border outline-none border-[#D0D0D0] resize-none "
                name="shortDesc"
                id="shortDesc"
                onChange={formik.handleChange}
                value={formik.values.shortDesc}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched.shortDesc && formik.errors.shortDesc ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.shortDesc}
                </div>
              ) : null}
            </div>
            <div className="flex justify-between my-2 flex-col  md:flex-row">
              <div className="flex flex-col my-2 ">
                <label
                  htmlFor="images"
                  className="text-[#959595] text-lg capitalize"
                >
                  images:
                </label>
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/png, image/gif, image/jpeg"
                  name="images"
                  onChange={handleSliderImages}
                />
                {formik.touched.images && formik.errors.images ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.images}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col my-2 ">
                <label
                  htmlFor="cover"
                  className="text-[#959595] text-lg capitalize"
                >
                  cover:
                </label>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="cover"
                  name="cover"
                  onChange={handleImages}
                />

                {formik.touched.cover && formik.errors.cover ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.cover}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="collll">
            <div className="flex flex-col my-2">
              <label
                htmlFor="deliveryTime"
                className="text-[#959595] text-lg capitalize"
              >
                deliveryTime:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]"
                type="number"
                name="deliveryTime"
                id="deliveryTime"
                onChange={formik.handleChange}
                value={formik.values.deliveryTime}
                onBlur={formik.handleBlur}
              />
              {formik.touched.deliveryTime && formik.errors.deliveryTime ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.deliveryTime}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="price"
                className="text-[#959595] text-lg capitalize"
              >
                category
              </label>
              <select
                className="p-2 rounded-md border outline-none border-[#D0D0D0]"
                name="cat"
                id="cat"
                onChange={formik.handleChange}
                value={formik.values.cat}
                onBlur={formik.handleBlur}
              >
                <option value="design">design</option>
                <option value="programming">programming</option>
                <option value="business">business</option>
                <option value="musicaudio">musicaudio</option>
                <option value="digitalmarketing">digitalmarketing</option>
                <option value="writingtranslation">writingtranslation</option>
                <option value="lifestyle">lifestyle</option>
                <option value="photography">photography</option>
              </select>
              {formik.touched.cat && formik.errors.cat ? (
                <div className="text-red-600 text-sm">{formik.errors.cat}</div>
              ) : null}
            </div>

            <div className="flex flex-col my-2">
              <label
                htmlFor="features"
                className="text-[#959595] text-lg capitalize"
              >
                features:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]"
                type="text"
                name="features"
                id="features"
                onChange={formik.handleChange}
                value={formik.values.f}
                onBlur={formik.handleBlur}
              />
              {formik.touched.features && formik.errors.features ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.features}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="revisionNumber"
                className="text-[#959595] text-lg capitalize"
              >
                revisionNumber:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]"
                type="number"
                name="revisionNumber"
                id="revisionNumber"
                onChange={formik.handleChange}
                value={formik.values.revisionNumber}
                onBlur={formik.handleBlur}
              />
              {formik.touched.revisionNumber && formik.errors.revisionNumber ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.revisionNumber}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col my-2">
              <label
                htmlFor="price"
                className="text-[#959595] text-lg capitalize"
              >
                price:
              </label>
              <input
                className="p-2 rounded-md border outline-none border-[#D0D0D0]"
                type="nunber"
                name="price"
                id="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.price}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-[#60A5FA]  p-3 rounded-md text-white my-2"
            >
              create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Creategig;
