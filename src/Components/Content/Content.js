import React, {useContext} from 'react';
import './Content.css';
import BtnToggle from '../Btn/Btn'
import {ThemeContext} from '../../Context/ThemeContext'


export default function Content() {

  const {theme} = useContext(ThemeContext);

  return (
  <div className="container">
    <BtnToggle />
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p className="content-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste debitis deleniti similique, pariatur exercitationem delectus facilis vitae quisquam perferendis odio quo possimus id doloremque adipisci, excepturi cum perspiciatis dolores? Facere voluptatem fugit reiciendis non adipisci aliquam aliquid reprehenderit perferendis neque, ipsam doloribus accusamus assumenda similique. Nihil doloribus, laborum, aliquam adipisci repellat commodi nisi aspernatur accusantium veniam facilis corrupti ducimus saepe eum iure hic sint! Voluptatibus assumenda doloremque dolorum? Voluptatibus accusamus quae facilis, itaque, dolorum sequi impedit reiciendis adipisci similique est vitae recusandae deleniti blanditiis distinctio ipsa illo? Officia, iure maiores expedita facere quos quia architecto, nam voluptate quidem ipsa voluptatem laborum? Eligendi molestias, asperiores laborum esse dignissimos minus deserunt eum velit provident minima rem numquam amet soluta necessitatibus harum libero quidem earum, accusamus, cupiditate voluptatum quaerat aliquid. Nam corporis nisi tempora officia odio. Aut facilis vel iste amet nihil, itaque sapiente sunt, modi rerum placeat veritatis? Harum, provident quaerat dignissimos vero excepturi ducimus. Voluptatum reprehenderit accusantium expedita libero. Excepturi consectetur soluta assumenda atque, fuga vitae quam deserunt ducimus quod tenetur, laboriosam veniam voluptatibus voluptas aspernatur sint aut non similique ex nihil exercitationem aliquid aperiam. Animi, veritatis quod? Ex, vero error aspernatur quibusdam reiciendis suscipit debitis, perferendis nisi unde voluptatum blanditiis, distinctio quae illo quod quia fugit fuga doloribus impedit! Quae totam, expedita in sunt iste nihil molestiae tenetur porro nulla, accusamus rerum autem. Accusamus cum voluptatibus a! Minima reiciendis beatae exercitationem esse doloribus libero repudiandae nobis provident? Nisi, nesciunt ratione. Tempora veniam doloremque nam ipsam ad, minus atque! Labore explicabo necessitatibus veniam debitis eligendi error sed obcaecati earum est quam ducimus dolorum vero deleniti tenetur, atque vel repellendus doloribus optio doloremque consequatur voluptatem odit! Explicabo ea, quae fugit eligendi eaque culpa perspiciatis sequi soluta mollitia earum voluptas quam dolore, porro eum expedita eos pariatur quibusdam maxime vitae totam? Rerum, nostrum?</p>
  </div>
  )
}
