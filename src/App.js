import "./app.css";
import browser from "../src/images/icon.png";

function App() {
  return (
    <div className="cover">
      <section className="showcase grid">
        <div className="left">
          <p>CSS SHOWDOWN.....</p>
          <p className="para">Clash Of the Cascading Style Sheets</p>
          <div className="flex">
            <a className="icon web" href="/">
              Website....
            </a>

            <a href="https://www.youtube.com/@crypteracit6727">
              <i class="icon fa-brands fa-youtube"></i>
            </a>

            <a href="https://www.instagram.com/cryptera_2k23/">
              <i class="icon fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div class="right-form card">
          <h2>Register To Battle</h2>
          <form
            action="https://formsubmit.co/2777b7b99839af52e16558abc67cec60"
            method="POST"
          >
            <div class="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input
              type="submit"
              value="Send"
              class="btn btn-primary"
              required
            />
          </form>
        </div>
      </section>

      <section className="Social"></section>
    </div>
  );
}

export default App;
