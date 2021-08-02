import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stepper-card',
    templateUrl: './stepper-card.component.html',
    styleUrls: ['./stepper-card.component.css']
})
export class StepperCardComponent implements OnInit {

    constructor() { }

  

    cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];
  slides1: any = [[]];
  slides2: any = [[]];
  chunk(arr:any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides1 = this.chunk(this.cards, 1);
    this.slides2.push(this.slides1[0]) ;
    this.slides=this.slides2;
  }

  loadNextQuestion(){
    this.slides1 = this.chunk(this.cards, 1);
    this.slides2=[];
    this.slides2.push(this.slides1[1]) ;
    this.slides=this.slides2;
  }

    steps = ["Wi Fi Selector", "Model Selector", "Pricing", "Consult Sales"];

    questions = {
        "questionSetId": 1,
        "questionSetValue": [
            {
                "questionId": 11,
                "questionValue": "Are you interested in exploring cloud-managed Wi-Fi?",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "111",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "112",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 12,
                "questionValue": "Do you have more than 250 Wi-Fi users? (or more than 1,000 Wi-Fi devices?)",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "121",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "122",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 13,
                "questionValue": "Do you deploy more than 50 Wi-Fi access points?",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "131",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "132",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 14,
                "questionValue": "Do you need advanced management tools? (automation, analytics, assurance, and so on)",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "141",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "142",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 15,
                "questionValue": "Do you need advanced wireless security? (flexible network segmentation, ETA, wIPS, and so on)",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "151",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "152",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 16,
                "questionValue": "Do you wish to have Cisco DNA Center for unified management of wired and wireless?",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "161",
                        "optionValue": "Yes",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "162",
                        "optionValue": "No",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            }
        ]
    };


    model1 = {
        "questionSetId": 2,
        "questionSetValue": [
            {
                "questionId": 21,
                "questionValue": "Installation Location",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "211",
                        "optionValue": "Indoor",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "212",
                        "optionValue": "Outdoor",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 22,
                "questionValue": "Antenna",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "221",
                        "optionValue": "Internal",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "222",
                        "optionValue": "External",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 23,
                "questionValue": "Radio",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "231",
                        "optionValue": "2×2:2 (2.4 GHz) + 2×2:2 (5 GHz)",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "232",
                        "optionValue": "2×2:2 (2.4 GHz) + 4×4:4 (5 GHz)",
                        "selected": false,
                        "mappedSet": null
                    },
                    {
                        "optionId": "233",
                        "optionValue": "4×4:4 (2.4 GHz) + 4×4:4 (5 GHz)",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "234",
                        "optionValue": " 4×4:4 (2.4 GHz) + 8×8:8 (5 GHz)",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            }
        ]
    };

    model2 = {

        "questionSetId": 3,
        "questionSetValue": [
            {
                "questionId": 31,
                "questionValue": "Access Point Type",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "311",
                        "optionValue": "AP without EWC",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "312",
                        "optionValue": "AP with EWC",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 32,
                "questionValue": "Installation Location",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "321",
                        "optionValue": "Indoor",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "322",
                        "optionValue": "Outdoor",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 33,
                "questionValue": "Antenna",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "331",
                        "optionValue": "Internal",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "332",
                        "optionValue": "External",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 34,
                "questionValue": "Radio",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "341",
                        "optionValue": "2×2:2 (2.4 GHz) + 2×2:2 (5 GHz)",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "342",
                        "optionValue": "2×2:2 (2.4 GHz) + 4×4:4 (5 GHz)",
                        "selected": false,
                        "mappedSet": null
                    },
                    {
                        "optionId": "343",
                        "optionValue": "4×4:4 (2.4 GHz) + 4×4:4 (5 GHz) with Dual 5 GHz Mode",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "344",
                        "optionValue": "4×4:4 (2.4 GHz) + 8×8:8 (5 GHz) with Tri Radio Mode",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            }
        ]

    };

    model3 = {
        "questionSetId": 4,
        "questionSetValue": [
            {
                "questionId": 41,
                "questionValue": "Installation Location",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "411",
                        "optionValue": "Indoor",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "412",
                        "optionValue": "Outdoor",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 42,
                "questionValue": "Installation Location (Continued)",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "421",
                        "optionValue": "Wall, Pole, Eave, or Cable Strand",
                        "selected": true,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 43,
                "questionValue": "Antenna",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "431",
                        "optionValue": "Internal (Omnidirectional)",
                        "selected": true,
                        "mappedSet": null
                    },
                    {
                        "optionId": "432",
                        "optionValue": "Internal (Directional)",
                        "selected": false,
                        "mappedSet": null
                    },
                    {
                        "optionId": "433",
                        "optionValue": "External",
                        "selected": false,
                        "mappedSet": null
                    }
                ]
            },
            {
                "questionId": 44,
                "questionValue": "Radio",
                "type": "radio",
                "isMandatory": true,
                "options": [
                    {
                        "optionId": "441",
                        "optionValue": " 4×4:4 (2.4 GHz) + 4×4:4 (5 GHz)",
                        "selected": true,
                        "mappedSet": null
                    }
                ]
            }
        ]
    }

}
