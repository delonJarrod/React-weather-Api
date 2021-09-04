import React from "react";
import Graph from "./Graph";
import axios from "axios";

function Page() {
  const base_url = "http://backend.algocorpsolutions.com/backend.txt";
  const cross_domain = "https://the-ultimate-api-challenge.herokuapp.com";
  const request_url = `${cross_domain}/${base_url}`;
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(request_url).then((response) => {
      setPost(response.data[0].data);
    });
  }, []);

  console.log(post);
  return (
    <div>
      <Graph data={post} />
    </div>
  );
}
export default Page;
