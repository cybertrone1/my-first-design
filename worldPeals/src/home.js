const Home = () => {
    return ( 
       <div className="home">
          <div className="intro-text">
          <h2>We’re farmers, purveyors, and eaters of organically grown food.</h2>
          <a href="/shop">
            <button>Browse our shop</button>
          </a>
        </div>
        <div className="images">
          <div className="img1"></div>
          <div className="text-img">
          <div className="img2"></div>
          <h3><p>Central California</p> The person who grew these was located in Central California and, er, hopefully very well-compensated.</h3>
          </div>
        </div>
        <div className="text">
          <h2>WHAT WE BELIEVE</h2>
          <article>
            We believe in produce. Tasty produce. Produce like: <br /> <br />
            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. <br /><br />
            What are we forgetting?
            <br /><br />
            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
          </article>
        </div>
       </div>
     );
}
 
export default Home;