import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
  // const [post, setPost] = useState({
  //   id: 0,
  //   title: "",
  //   content: "",
  //   image: "",
  //   tags: []
  // });
  const { id } = useParams();
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  let nextPostId = 0;
  let prevPostId = 0;

  let intId = parseInt(id);

  if (intId === 1) {
    prevPostId = 0;
    nextPostId = intId + 1;
  } else if (intId === numberOfPosts) {
    prevPostId = intId - 1;
    nextPostId = 0;
  } else {
    prevPostId = intId - 1;
    nextPostId = intId + 1;
  }

  const { title, content, image, tags } = post;
  const navigate = useNavigate();

  const handlePrevClick = prevId => {
    console.log("prevId: ", prevId);
    console.log("numberOfPosts: ", numberOfPosts);
    prevId === 0
      ? navigate(`/posts/${numberOfPosts}`)
      : navigate(`/posts/${prevId}`);
  };
  const handleNextClick = nextId => {
    console.log("nextId: ", nextId);
    console.log("numberOfPosts: ", numberOfPosts);
    nextId === 0 ? navigate(`/posts/1`) : navigate(`/posts/${nextId}`);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:3000/posts/${id}`)
  //     .then(response => response.json())
  //     .then(data => setPost(data))
  //     .catch(error => {
  //       console.error(error);
  //     });
  // });

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => {
        setNumberOfPosts(data.length);
      })
      .catch(error => {
        console.error(error);
      });
  }, [post]);

  return (
    <main className='container-fluid bg-smoke-50 mt-10u rounded-xl'>
      <section className='row-grid p-10u'>
        <div className='gap-4u col-span-full flex flex-col'>
          <span>{image}</span>
          <h1 className='font-h1'>{title}</h1>
          <div className='gap-2u flex flex-wrap'>
            {tags.map((singleTag, i) => {
              return (
                <>
                  <span
                    className='px-3u py-2u font-body-s-light rounded-full border border-black'
                    key={i}>
                    {singleTag}
                  </span>
                </>
              );
            })}
          </div>
          <p className='font-body-base-light'>{content}</p>
          {/* prev / next post */}
          <div className='flex w-full items-center justify-between'>
            <button
              className='px-7u py-2u hover:bg-amethyst-600 w-fit rounded-full bg-black text-white transition-all hover:cursor-pointer'
              onClick={() => handlePrevClick(prevPostId)}>
              Post precedente
            </button>
            <button
              className='px-7u py-2u hover:bg-amethyst-600 w-fit rounded-full bg-black text-white transition-all hover:cursor-pointer'
              onClick={() => handleNextClick(nextPostId)}>
              Post successivo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
