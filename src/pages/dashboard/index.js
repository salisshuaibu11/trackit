import Layout from "../../components/layout"

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="h-96">
          <h1 className="text-2xl font-semibold">Welcome back Aliyu</h1>
          <p className="text-gray-500">Good to have you here. Lets get you ready for production</p>
      </div>
    </Layout>
  )
}