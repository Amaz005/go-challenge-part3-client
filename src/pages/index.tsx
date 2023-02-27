import Layout from '../components/Layout'
import { ReactElement, useEffect, useState } from 'react'
import {  Button, List, ListItem,UnorderedList, Text, Box } from '@chakra-ui/react'
import { instance } from '../utils/axiosInit';


type input = {
  walletAddress: string
}

const initialInput: input = {
  walletAddress: ""
}

type project = {
  id: string,
  name:string,
  path: string,
  http_url_to_repo: string,
  visibility: string
}

type user = {
  id: string,
  username:string,
}

type commit = {
  id: string,
  title: string,
  author_name: string,
  author_email: string,
  committed_date: string
}

export default function Home() {
  const [data, setData] = useState<project[]>([])
  const [loading, setLoading] = useState(true);
  const [isloading, setIsLoading] = useState("");
  const [users, setUsers] = useState<user[]>([])
  const [commits, setCommits] = useState<commit[]>([])
  const [projectId, setProjectId] = useState("")
  const [username, setUsername] = useState("")

  useEffect(() => {
      const controller = new AbortController()
      // const fetchData = async () => {
      //   try {
      //     const res = await instance.get('/projects?owner=true')
      //     setData(res.data)
      //   } catch (err) {
      //     console.log(err)
      //   } finally {
      //     setLoading(false)
      //   }
      // }
      
      // fetchData()

      return () => controller.abort()
  }, [])

  async function handleGetUsers (id: string) {
    setIsLoading(id)
    console.log(id)
    const res = await instance.get(`/users?projectid=${id}`)
    setUsers(res.data)
    setProjectId(id)
    setCommits([])
    setUsername("")
    console.log({users})
    setIsLoading("")
  }

  async function handleGetCommits(id:string,name: string) {
    setIsLoading(id+name)
    console.log({id, name})
    const res = await instance.get(`/commits?projectid=${id}&user=${name}`)
    setCommits(res.data)
    setUsername(name)
    console.log({commits})
    setIsLoading("")
  }

  return (
    <Box width="30%" style={{ margin: "auto", textAlign:"center"}}>
      Hello world!
    {/* <Text fontWeight={"bold"} fontSize="20">Projects</Text>
    <List spacing={3}>
      { !loading ? 
        data.map((item) => (
          <ListItem key={"Item" +item.id}>
            <Button isLoading={isloading == item.id} key={"button" + item.id} onClick={async () => await handleGetUsers(item.id)}>{item.name}</Button>

          </ListItem>
          )) : <>Loading!</>
      }
    </List>
    <Text fontWeight={"bold"} fontSize="20">Users</Text>
      {
        users.length > 0? 
        <List spacing={3}>
          {
            users.map(user =>(
              <ListItem key={"user" + projectId}>
                <Button isLoading={isloading == projectId+user.username} key={user.id} onClick={async () => await handleGetCommits(projectId,user.username)}>{user.username}</Button>
              </ListItem>
            ))
          }
        </List>
        : <></>
      }
      
      <Text fontWeight={"bold"} fontSize="20">Commits</Text>
      {
        username != ""? 
        <List spacing={3}>
          {
            commits.map(commit =>(
              <ListItem key={"commit" + username}>
                <Text>Title: {commit.title}</Text>
                <Text>Email: {commit.author_email}</Text>
                <Text>Usename: {commit.author_name}</Text>
              </ListItem>
            ))
          }
        </List>
        : <></>
      } */}
    </Box>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
