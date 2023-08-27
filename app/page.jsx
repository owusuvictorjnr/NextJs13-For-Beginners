import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        minus dolores veniam quae, in autem voluptatum eos impedit consectetur
        error, ipsam quas assumenda, facilis reprehenderit suscipit vero nobis
        odit doloremque atque! Minima amet eligendi aperiam veritatis ut.
        Corporis, at perspiciatis molestias illum veniam voluptatem molestiae
        quod, aliquid quas incidunt necessitatibus!
      </p>

      <div className="flex justify-center my-8">
        <Link href="tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Update</h2>

      <div className="card">
        <h3>New member of the web dev team </h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia sit
          eligendi, blanditiis doloribus excepturi, nulla eos at sapiente quae
          reprehenderit, cupiditate laboriosam necessitatibus quisquam
          consequuntur ducimus distinctio similique fuga iste.
        </p>
      </div>

      <div className="card">
        <h3>New website live</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor
          unde sunt earum possimus qui dicta minus totam quae hic? Sequi in
          beatae aut magni quam eos molestias deserunt? Laudantium!
        </p>
      </div>
    </main>
  )
}
