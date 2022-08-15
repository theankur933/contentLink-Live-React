const Comment = () => {
  return (
    <>
      <section>
        <div className="comment abc">
          <label htmlFor="comment">Comments:</label>
          <textarea
            rows="10"
            cols="120"
            id="comment"
            name="text"
            placeholder="Write comments here!!!"
          ></textarea>
        </div>
        <div className="comm-btn">
          <button>Submit</button>
        </div>
      </section>

      <section className="sub">
        <h3>Hey! Here you can Subscribe to my site🤔🤔🤔</h3>

        <div className="subscribe abc">
          <input type="mail" placeholder="Enter Your Email ID" />
          <button>Subscribe</button>
        </div>
      </section>

      <hr />
    </>
  );
};
export default Comment;
