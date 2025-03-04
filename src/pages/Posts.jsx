import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  // const [postsList, setPostsList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/posts")
  //     .then(response => response.json())
  //     .then(data => setPostsList(data))
  //     .catch(error => {
  //       console.error(error);
  //     });
  // });

  return (
    <main className='container-fluid bg-smoke-50 mt-10u rounded-xl'>
      <section className='row-grid gap-x-5u gap-y-10u px-3u py-7u xl:px-7u'>
        {/* ciclare cols con dentro posts */}

        {postsList.map(singlePost => {
          const { id, title, tags } = singlePost;

          return (
            <>
              <div
                className='gap-4u p-5u col-span-full flex flex-col rounded-lg border border-black/10 bg-white shadow-sm md:col-span-4'
                key={id}>
                <p className='font-body-l-bold'>{title}</p>
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
                <Link
                  to={`/posts/${id}`}
                  className='px-7u py-2u hover:bg-amethyst-600 w-fit rounded-full bg-black text-white transition-all hover:w-full hover:cursor-pointer'>
                  Vai al post
                </Link>
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
}
