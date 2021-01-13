import Layout from '../components/Layout/index'
import styles from '../styles/context.module.css'

export default function Home() {
  return (
    <Layout>
      <>
      <section className = {styles.contextMainContainer}>
            <h3>Desarrollador</h3>
            <p>Combierte tus sueños en realidad</p>
      </section>

      </>
    </Layout>
  )
}
