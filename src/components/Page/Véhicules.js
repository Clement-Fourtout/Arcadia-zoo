const xhr = new XMLHttpRequest();
xhr.open('GET', 'postgres://qabcivgilpgale:543d5f9c12608c5a4a3c2f844f42e4e196905d3b7052f729e6fe36f51a6cc4c8@ec2-34-228-248-175.compute-1.amazonaws.com:5432/dft23004ee8q23');
xhr.send();


function Vehicules() {
  return (
    <>
      <div className="Vehicules"/>
      <main class="container-lg bg-dark-subtle p-2 mt-3 mb-3  border border-bottom-0 border-top-0 border-bg-primary-subtle ">
      </main>

    </>

  )
}



export default Vehicules;