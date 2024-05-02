// import './App.css';

// import Homepage from './components/Homepage';

// function App() {
//     // Data that will be distributed to the components in our page

//     // 1. Make blog entry data (this will eventually represent our state but right now its manually entered data):
//     let allEntries = [
//         {
//             date: '11/12/2020',
//             title: 'On the Street in Brooklyn',
//             image: '/blog-image-1.jpg',
//             body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Vitae tortor condimentum lacinia quis vel eros. Leo vel orci porta non pulvinar. Lacus sed viverra tellus in hac habitasse platea dictumst. Scelerisque purus semper eget duis at. Odio eu feugiat pretium nibh ipsum consequat. Ut porttitor leo a diam sollicitudin tempor id. Morbi tristique senectus et netus et. Egestas sed tempus urna et pharetra. Nibh sed pulvinar proin gravida hendrerit. Vitae purus faucibus ornare suspendisse. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent. Non curabitur gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis at tellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Porttitor massa id neque aliquam vestibulum. Varius sit amet mattis vulputate enim nulla. Gravida rutrum quisque non tellus orci ac.',
//         },
//         {
//             date: '11/11/2020',
//             title: 'Vintage in Vogue',
//             image: '/blog-image-2.jpg',
//             body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Vitae tortor condimentum lacinia quis vel eros. Leo vel orci porta non pulvinar. Lacus sed viverra tellus in hac habitasse platea dictumst. Scelerisque purus semper eget duis at. Odio eu feugiat pretium nibh ipsum consequat. Ut porttitor leo a diam sollicitudin tempor id. Morbi tristique senectus et netus et. Egestas sed tempus urna et pharetra. Nibh sed pulvinar proin gravida hendrerit. Vitae purus faucibus ornare suspendisse. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent. Non curabitur gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis at tellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Porttitor massa id neque aliquam vestibulum. Varius sit amet mattis vulputate enim nulla. Gravida rutrum quisque non tellus orci ac.',
//         },
//     ];

//     return (
//         <div className="App">
//             {/* Here we are passing in our allEntries data as props into Homepage: */}
//             <Homepage entries={allEntries} />
//         </div>
//     );
// }

// export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {
    let allEntries = [
        {
            date: '11/12/2020',
            title: 'On the Street in Brooklyn',
            image: '/blog-image-1.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Vitae tortor condimentum lacinia quis vel eros. Leo vel orci porta non pulvinar. Lacus sed viverra tellus in hac habitasse platea dictumst. Scelerisque purus semper eget duis at. Odio eu feugiat pretium nibh ipsum consequat. Ut porttitor leo a diam sollicitudin tempor id. Morbi tristique senectus et netus et. Egestas sed tempus urna et pharetra. Nibh sed pulvinar proin gravida hendrerit. Vitae purus faucibus ornare suspendisse. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent. Non curabitur gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis at tellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Porttitor massa id neque aliquam vestibulum. Varius sit amet mattis vulputate enim nulla. Gravida rutrum quisque non tellus orci ac.',
        },
        {
            date: '11/11/2020',
            title: 'Vintage in Vogue',
            image: '/blog-image-2.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Vitae tortor condimentum lacinia quis vel eros. Leo vel orci porta non pulvinar. Lacus sed viverra tellus in hac habitasse platea dictumst. Scelerisque purus semper eget duis at. Odio eu feugiat pretium nibh ipsum consequat. Ut porttitor leo a diam sollicitudin tempor id. Morbi tristique senectus et netus et. Egestas sed tempus urna et pharetra. Nibh sed pulvinar proin gravida hendrerit. Vitae purus faucibus ornare suspendisse. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent. Non curabitur gravida arcu ac tortor dignissim. Scelerisque purus semper eget duis at tellus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Porttitor massa id neque aliquam vestibulum. Varius sit amet mattis vulputate enim nulla. Gravida rutrum quisque non tellus orci ac.',
        },
    ];

    return (
        <div className="App">
            <Header />
            <div className="recent-entries">
                {allEntries.map((entry, index) => (
                    <Article key={index} entry={entry} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;