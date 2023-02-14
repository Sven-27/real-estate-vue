export class Inspections {
   id = null;
   name = "";
   address = "";
    city = "";
    date = "";
    surveyOfDamage = new SurveyOfDamage();
    overdueMaintenance = new OverdueMaintenance();
    technicalInstallation = new TechnicalInstallation();
    modifications = new Modifications();

  constructor(item) { 
    this.id = item.id;
    this.name = item.name;
    this.address = item.address;
    this.city = item.city;
    this.date = item.date;
    if(item.surveyOfDamage) {
      this.surveyOfDamage = new SurveyOfDamage(item.surveyOfDamage);
    }
    if(item.overdueMaintenance) {
      this.overdueMaintenance = new OverdueMaintenance(item.overdueMaintenance);
    }
    if(item.technicalInstallation) {
      this.technicalInstallation = new TechnicalInstallation(item.technicalInstallation);
    }
    if(item.modifications) {
      this.modifications = new Modifications(item.modifications);
    }

  }
}

export class SurveyOfDamage {
  constructor(item) {
    if(item) {
      // console.log(item)
    this.location = item.location;
    this.newDamage = item.newDamage;
    this.typeOfDamage = item.typeOfDamage;
    this.date = item.date;
    this.requiredAction = item.requiredAction;
    this.description = item.description;
    }
  }

  location = "";
  newDamage = "";
  typeOfDamage = "";
  date = "";
  requiredAction = "";
  description = "";

}

export class OverdueMaintenance {
  
  constructor(item) {
    if(item){
    this.location = item.location;
    this.typeOfMaintenance = item.typeOfMaintenance;
    this.requiredAction = item.requiredAction;
    this.estimatedCost = item.estimatedCost;
    }
  }
  location = "";
  typeOfMaintenance = "";
  requiredAction = "";
  estimatedCost = "";
}

export class TechnicalInstallation {
  
  constructor(item) {
    if(item){
    this.location = item.location;
    this.typeOfInstallation = item.typeOfInstallation;
    this.reportedFailures = item.reportedFailures;
    this.testProcedure = item.testProcedure;
    this.approved = item.approved;
    this.estimatedCost = item.estimatedCost;
    this.comments = item.comments;
    }
  }
  location = "";
  typeOfInstallation = "";
  reportedFailures = "";
  testProcedure = "";
  approved = "";
  estimatedCost = "";
  comments = "";
}

export class Modifications {
  
  constructor(item) {
    if(item){
    this.existingDocs = item.existingDocs;
    this.location = item.location;
    this.carriedOutBy = item.carriedOutBy;
    this.actionToTake = item.actionToTake;
    this.description = item.description;
    }
  }
  existingDocs = "";
  location = "";
  carriedOutBy = "";
  actionToTake = "";
  description = "";
}