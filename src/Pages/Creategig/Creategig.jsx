import { useFormik } from "formik";
import * as Yup from "yup";

const BASE_URL = "https://workwave-vq08.onrender.com/api";
function Creategig() {
  const formik = useFormik({
    initialValues: {
      title: "",
      shortTitle: "",
      cover: "",
      images: "",
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
      cover: Yup.string().required(),
      images: Yup.string().required(),
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

    const res = await fetch(`${BASE_URL}/gigs`, {
      method: "POST",
      body: JSON.stringify(formik.values),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <>
      <div className="container py-8">
        <h1>Add new gig</h1>

        <form onSubmit={formik.handleSubmit} className="flex flex-wrap">
          <div className="collll">
            <div>
              <label htmlFor="title">Title:</label>
              <input
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
            <div>
              <label htmlFor="shortTitle">shortTitle:</label>
              <input
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
            <div>
              <label htmlFor="cover">cover:</label>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                id="cover"
                name="cover"
                onChange={formik.handleChange}
                value={formik.values.cover}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cover && formik.errors.cover ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.cover}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="images">images:</label>
              <input
                type="file"
                id="images"
                multiple
                accept="image/png, image/gif, image/jpeg"
                name="images"
                onChange={formik.handleChange}
                value={formik.values.images}
                onBlur={formik.handleBlur}
              />
              {formik.touched.images && formik.errors.images ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.images}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="shortDesc">shortDesc:</label>
              <textarea
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
            <div>
              <label htmlFor="desc">desc:</label>
              <textarea
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
          </div>
          <div className="collll">
            <div>
              <label htmlFor="features">features:</label>
              <input
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
            <div>
              <select
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
            <div>
              <label htmlFor="deliveryTime">deliveryTime:</label>
              <input
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
            <div>
              <label htmlFor="revisionNumber">revisionNumber:</label>
              <input
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
            <div>
              <label htmlFor="price">price:</label>
              <input
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
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    </>
  );
}

export default Creategig;
