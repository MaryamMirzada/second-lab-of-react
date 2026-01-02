function Info ({name, site, role, org }){
    return (
      <div>
          <h1> 
              Your Information
          </h1>
        <p>
          this is {name} from {site}. I am {role} in the {org}.
            
        </p>
      </div>
    );
}
export default Info 
