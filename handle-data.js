// Function that handles all data 
function handleData(data) {
  //************************************************
  // Examining the data for relevant values
  //************************************************
  
  // Number of passengers
  const passengerCount = makeValueElement(data.length, 'Number of Passengers')
  // container.appendChild(passengerCount)

  // Women Count
  const femalePassengerCount = countFields(data, 'sex', 'female')
  const displayFPC = makeValueElement(femalePassengerCount, 'Number of Female Passengers')
  // container.appendChild(displayFPC)

  // Male Count 
  const malePassengerCount = countFields(data, 'sex', 'male')
  const displayMPC = makeValueElement(malePassengerCount, 'Number of Male Passengers')
  // container.appendChild(displayMPC)

  //************************************************
  // Count all Values of a field
  //************************************************

  // Find the passenger Ticket Classes
  const allClasses = data.reduce((acc, passenger) => {
    if (acc.indexOf(passenger.fields.pclass) === -1) {
      return [...acc, acc.push(passenger.fields.pclass)]
    } 
    return acc
  }, [])
  console.log(`Ticket Classes: ${allClasses}`)

  // Find the numbers of siblings/spouses
  const sibSpCount = data.reduce((acc, passenger) => {
    return acc + passenger.fields.sibsp
  }, 0)
  console.log(`Number of siblings/spouses: ${sibSpCount}`)

  // Find the number of different fares paid
  const diffFare = data.reduce((acc, passenger) => {
    if (acc.indexOf(passenger.fields.fare) === -1) {
      return [...acc, acc.push(passenger.fields.fare)]
    } 
    return acc
  }, [])
  console.log(`Number of different fares paid: ${diffFare.length}`)

  //************************************************
  // Agregate Data
  //************************************************

  // Male Passengers: 
  const malePassengers = data.reduce((acc, passenger) => {
    if(passenger.fields.sex === 'male') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])
  // const malePassengers = data.filter(passenger => passenger.fields.sex === 'male')

  // List of all passengers who survived
  const survivors_list = data.reduce((acc, passenger) => {
    if(passenger.fields.survived === 'Yes') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])
  
  // List of all passengers who did not survive
  const deceased_list = data.reduce((acc, passenger) => {
    if(passenger.fields.survived === 'No') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])

  // List of all of the female passengers that survived
  const female_survivors = data.reduce((acc, passenger) => {
    if(passenger.fields.sex === 'female' && passenger.fields.survived === 'Yes') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])

  // List of all of the female passengers who did not survive
  const deceased_female = data.reduce((acc, passenger) => {
    if(passenger.fields.sex === 'female' && passenger.fields.survived === 'No') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])

  // List of all of the male passengers who survived
  const male_survivors = data.reduce((acc, passenger) => {
    if(passenger.fields.sex === 'male' && passenger.fields.survived === 'Yes') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])
  
  // List of all of the male passengers who did not survive
  const deceased_male = data.reduce((acc, passenger) => {
    if(passenger.fields.sex === 'male' && passenger.fields.survived === 'No') {
      acc.push(passenger.fields.name)
    }
    return acc
  }, [])

  // Make a list of women and men in each class

  //************************************************
  // Min & Max 
  //************************************************

  const minFare = data.reduce((acc, passenger) => {
    if (Number(!passenger.fields.fare)) return acc 
    return Math.min(acc, Number(passenger.fields.fare))
  }, 9999)

  const maxFare = data.reduce((acc, passenger) => {
    if(Number(!passenger.fields.fare)) return acc
    return Math.max(acc, Number(passenger.fields.fare))
  }, 0)

  console.log(`Min fare: ${minFare} Max fare: ${maxFare}`)

  // More challenges: 
  // Find the maximum fare paid
  // Find the minimum fare paid
  // Find the Oldest and youngest passenger
  // Find the oldest male and female passenger
  // Find the youngest male and female passenger
  // Find the oldest survivor
  // Find the youngest survivor

  //************************************************
  // Average
  //************************************************

  const allFares = data.filter(passenger => passenger.fields.fare)
  const averageFare = data.reduce((acc, passenger) => acc + Number(passenger.fields.fare), 0) / allFares.length

  console.log(`Average Fare: ${averageFare}`)

  // Find the average age of all passengers.
  // Find the average age of all female passengers
  // Find the average age of all male passengers
}