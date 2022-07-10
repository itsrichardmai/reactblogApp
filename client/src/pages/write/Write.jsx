import { useContext, useState, useEffect } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
// import Select from "react-select"

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [categories, setCats] = useState();
//   const options = [
//   {
//     value: 'Fashion', label: 'Fashion'
//   },
//   {
//     value: 'Pets', label: 'Pets'
//   },
//   {
//     value: 'Monsters', label: 'Monsters'
//   },
//   {
//     value:  'Food', label: 'Food'
//   },
//   {
//     value: 'Gallery', label: 'Gallery'
//   },
//   {
//     value: 'Memories', label: 'Memories'
//   },
// ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,

    };
    console.log(newPost);
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          <form>     
              {/* <Select options={options}
              onChange={(e)=>
                setCats(e.value)
                }/>
             */}
             <select id="categories"
             placeholder="Category"
             className="form-select"
             onChange={(e)=>{
              setCats(e.value)
             }}>
              <option value="Fashion">Fashion</option>
              <option value="Pets">Pets</option>
              <option value="Monsters">Monsters</option>
              <option value="Food">Food</option>
              <option value="Gallery">Gallery</option>
              <option value="Memories">Memories</option>
             </select>
            </form>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}