async function test_Submit() {
  //Modify your test record here
  const new_record = {
    taskName: "A test subject.",
  };

  await fetch("http://localhost:8080/record/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(new_record),
  }).catch((err) => {
    console.log(err);
    return;
  });
}

test_Submit();
