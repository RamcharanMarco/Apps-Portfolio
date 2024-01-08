import "../../styles/sayhi.scss";

const SayHi = () => {
  return (
    <div className="sayhi">
      <div>
      <h1>say hi</h1>
      </div>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="cell no" />
        <textarea  placeholder="message" />
        <button>send message</button>
      </form>
    </div>
  );
};

export default SayHi;
