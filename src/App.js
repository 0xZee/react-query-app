//import "./styles.css";
// depends
import { useState } from "react";
// comps
import Posts from "../comps/Posts";
import Query from "../comps/Query";

export default function App() {
  // Posts Data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HODL",
      content:
        "HODL stands for “hold on for dear life.” HODL is a popular crypto meme and misspelling of the word “hold”",
      date: Date.now()
    },
    {
      id: 2,
      title: "SHILL",
      content:
        "Shilling is the act of using propaganda, false narratives to promote an investment, particularly of low quality, for a financial incentive.",
      date: Date.now()
    },
    {
      id: 5,
      title: "Pump and Dump",
      content:
        "“Pump and dump” doesn’t merely apply to cryptocurrency; it’s seen in stocks, too. It is considered market manipulation and is illegal in regulated securities.",
      date: Date.now()
    },
    {
      id: 9,
      title: "No Coiner",
      content:
        "A “no-coiner” is someone who’s pessimistic about crypto and doesn’t believe that there is a use case for it. As such, they have no holdings, no crypto tokens, and no coins. They’re a no-coiner.",
      date: Date.now()
    },
    {
      id: 6,
      title: "WEN LAMBO ?",
      content:
        "At some point, Lamborghinis — yes, the expensive sports cars — became associated with crypto culture. Mostly because people making a lot of money from crypto were able to buy them. As such, the term “when Lambo?” became synonymous with a crypto’s success. ",
      date: Date.now()
    },
    {
      id: 7,
      title: "REKT",
      content:
        "Rekt, an intentional misspelling of “wrecked,” is a slang term used in crypto to describe an investor’s portfolio or investment getting handily defeated. It’s used sensationally on social media to alert overleveraged positions being liquidated causing massive financial losses",
      date: Date.now()
    },
    {
      id: 3,
      title: "FOMO",
      content:
        "FOMO stands for “fear of missing out.” FOMO happens across all parts of life. In this context, it’s a common investor psychological state in which an investor feels a combination of panic and envy for not having an active position in a powerful market move from which others are benefiting.",
      date: Date.now()
    },
    {
      id: 4,
      title: "FUD",
      content:
        "FUD stands for “fear, uncertainty, and doubt.” FUD, as it’s commonly exclaimed in crypto circles, is a psychological method of inspiring negative sentiment about a particular asset to prevent further buying or even instigate selling or short-selling.",
      date: Date.now()
    },
    {
      id: 8,
      title: "WHALE",
      content:
        "In crypto, a whale is an entity that has a massive position in regard to a specific cryptocurrency. For instance, a Bitcoin whale may be a company that owns 50,000 bitcoins, allowing it to move the markets with a single trade.",
      date: Date.now()
    },
    {
      id: 10,
      title: "BTD / BTFD",
      content:
        "BTD stands for “buy the dip”, to enter a long position during a suspected brief decrease in an asset’s price. More commonly used in bull markets to support the bullish sentiment and rising prices but also used in crypto bear markets to buy at good value for a longer-term.",
      date: Date.now()
    }
  ]);

  // Const For Posts and blogs

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // TOOGLES for search and posts

  const [postStatus, setPostStatus] = useState(false);
  const [postPublished, setPostPublished] = useState(false);

  // handling POST functions
  const handleDisplayPost = (e) => {
    e.preventDefault();
    setPostStatus(!postStatus);
  };

  // HANDLING FUNCTION TO ADD POST
  const handleAddPost = (e) => {
    e.preventDefault();
    const postsCopy = [...posts];
    const id = new Date().getTime();
    const title = newTitle;
    const content = newContent;
    postsCopy.push({ id: id, title: title, content: content });
    setPosts(postsCopy);
    setPostStatus(false);
    setPostPublished(true);
    console.log(id, title, content);
  };

  //
  //

  return (
    <div className="" style={{ fontFamily: "Verdana", color: "#322f2f " }}>
      <h3 className=" bg-dark shadow text-light p-2 font-weight-bolder">
        <span role="img" aria-label="check">
          👻
        </span>{" "}
        Dashb0ard App
      </h3>

      <div className="containter p-4">
        <Query />

        <h4 className="border-bottom text-info p-2  mb-4 font-weight-bold">
          <span role="img" aria-label="check">
            👾
          </span>{" "}
          Posts & Slangs <span class="glyphicon glyphicon-envelope"></span>
        </h4>

        <button
          onClick={handleDisplayPost}
          type="button"
          className="btn btn-outline-info btn-lg btn-block mb-4"
        >
          Add New Post
        </button>

        {postStatus ? (
          <div className="mb-4">
            <div className="">
              <input
                placeholder="Slang"
                type="text"
                aria-label="First name"
                className="form-control mb-2"
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
              <textarea
                className="form-control"
                placeholder="Leave a description here"
                aria-label="With textarea"
                onChange={(e) => {
                  setNewContent(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleAddPost}
              type="button"
              className="btn btn-info btn-block mt-2"
            >
              Post
            </button>
          </div>
        ) : null}

        {postPublished ? (
          <div className="border mb-2 text-success">
            {" "}
            <span role="img" aria-label="check">
              ✅{" "}
            </span>{" "}
            Your Post "
            <span className="font-weight-bold text-muted">{newTitle}</span>" was
            Published under id{" "}
            <span className="font-weight-bold text-muted">#{Date.now()}</span>{" "}
          </div>
        ) : null}

        <div className=" row">
          {posts.map((post) => {
            return (
              <Posts key={post.id} title={post.title} content={post.content} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
