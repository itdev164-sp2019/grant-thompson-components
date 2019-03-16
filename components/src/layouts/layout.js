import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import {Gray as theme } from '../themes/Gray'
import { Footer, Link, Main} from '../components/Element'
import {Masthead, MastheadDrawer, DefaultLayout} from '../components/Masthead'

const links = [
    {
      variant: 'contrast',
      to: 'health-medicine',
      text: 'Health'
    },
    {
      variant: 'contrast',
      to: 'mind-brain',
      text: 'Mind'
    },
    {
      variant: 'contrast',
      to: 'technology',
      text: 'Technology'
    },
    {
      variant: 'contrast',
      to: 'space-physics',
      text: 'Space'
    },
    {
      variant: 'contrast',
      to: 'environment',
      text: 'Environment'
    },
]

export default class Layout extends React.Component{

  state={
    drawerOpen:true,
    prevScrollPosition: null
  }

  componentDidMount(){
    window.addEventListener('scroll', this.checkScrollPosition.bind(this))
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.checkScrollPosition.bind(this))
  }

  

  checkScrollPosition(){
    let offset = 1
    let {drawerOpen } = this.state
    let scrollDown = window.scrollY > this.prevScrollPosition

    scrollDown && window.scrollY > offset ? 
    drawerOpen && this.setState({drawerOpen: false, showScrollupImage: true}) :
    !drawerOpen && this.setState({drawerOpen: true, showScrollupImage: false})

    if (window.matchMedia('(max-width: 768px)').matches){
      this.setState({ showScrollupImage: false })
    }

    this.prevScrollPosition = window.scrollY

  }

  render(){
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Masthead height="85px">
        <ThemeConsumer>
          {theme => (<DefaultLayout image={theme.images.mastheadImage} />
          )}
        </ThemeConsumer>
        </Masthead>
        <Main mt={85}>
            <MastheadDrawer
              height="56px"
              width="900px"
              top="85px"
              open={this.state.drawerOpen}
              >
              {links.map((link, i) => (
                <Link
                  key={i}
                  variant={link.variant}
                  href={link.to}
                  fontSize={[0,1,2]}
                  >
                  {link.text}
                  </Link>
              ))}
              </MastheadDrawer>
              {children}
              
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis ipsum labore in laboriosam praesentium perspiciatis consequatur eum quasi soluta vero itaque, rerum eos deleniti quod, amet inventore, corporis quis!</p>
                <p>Maxime sed id eius deserunt quisquam quae, quas a vitae vel veniam ab, assumenda provident at placeat aliquam repellendus accusamus quo culpa. Libero at ipsum illum amet beatae expedita cumque.</p>
                <p>Necessitatibus porro eum repudiandae id deleniti assumenda itaque excepturi corporis doloremque nesciunt fugiat esse repellendus magnam, amet ab error praesentium dolor. Debitis expedita voluptatum nisi mollitia deserunt quidem similique a.</p>
                <p>Quam laborum velit est repellendus veniam at voluptates esse animi dignissimos repudiandae tenetur, quis maxime. Maxime, aliquam reiciendis omnis odio dolores sint sit tempore blanditiis est illo, placeat ad accusantium!</p>
                <p>Illo molestiae tempore nulla. Mollitia quis vero ad ipsum hic, accusamus dolorem nostrum nulla vitae optio tempora, id dolor ratione quae nobis dicta porro dolore. Perferendis ut porro quidem ratione.</p>


        </Main>


                


          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </div>
    )}
  />
  </ThemeProvider>
    )
  }

}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
