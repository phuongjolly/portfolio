import { Link } from "react-router-dom";

export default function Post() {
  //const { data } =  useSWR("");
  const data = {
    id: 0,
    avatarUrl:
      "https://dr9wvh6oz7mzp.cloudfront.net/i/c6800d9fa1e70422cf2519bcecc546a5_ra,w380,h380_pa,w380,h380.jpg",
    title: "Hello world!",
    description: "Hello world to every one",
    tags: [
      {
        id: 0,
        name: "c++",
      },
      { id: 1, name: "nodejs" },
    ],
  };

  return (
    <div className="post">
      <div className="post-button">
        <button className="ui button">
          <Link to={`/posts/${data.id}/edit`}>Edit</Link>
        </button>
        <button className="ui button" onClick={() => {}}>
          Delete
        </button>
      </div>
      {data && (
        <>
          <div className="post-title">
            <h1>{data.title}</h1>
          </div>
          <div className="post-description">
            <p>{data.description}</p>
          </div>
          <div className="editor">
            <div className="DraftEditor-root">
              <div className="DraftEditor-editorContainer">
                {"hello world from post"}
              </div>
            </div>
          </div>
          <div className="tag">
            {data.tags.map((tag) => (
              <div key={tag.id}>
                <Link to={`/posts/tags/${tag.name}`}>
                  <div className="item">#{tag.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="navigation">
        <div className="previous">Previous Page</div>
        <div>
          <i className="th large icon" />
        </div>
        <div className="next">
          <a href="https://www.facebook.com">Next Page</a>
        </div>
      </div>
    </div>
  );
}
