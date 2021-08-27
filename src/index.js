import Post from './Post'
import './styles/style.css'

import Cat from './cat.png'
import Bat from './batman.png'
import hollyWood from './hollywood.png'
import strippers from './strippers.png'
import genreOne from './genre-1.png'
import genreTwo from './genre-2.png'
import genreThree from './genre-3.png'
import genreFour from './genre-4.png'

const post = new Post('Webpack Post Title')

console.log('Post to String', post.toString() )