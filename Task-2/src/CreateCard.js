
function CreateCard(ps) {
    return (
      <div className = "user-card" >
        <div className = "left">
          <img src = {ps.avatar} />
        </div>
        <div className = "right">
          <p> {ps.id} </p>
          <p id = "name" > {ps.first_name} {ps.last_name} </p>
          <p> {ps.email} </p>
        </div>
      </div>
    );
  }

export default CreateCard;