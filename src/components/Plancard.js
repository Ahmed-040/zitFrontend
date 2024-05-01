// import React from 'react';
// import '../styles/plancard.css';
// import { useNavigate } from 'react-router-dom';
// // import jwt from 'jsonwebtoken';
// const PlanCard = ({ plan }) => {
//     const navigate = useNavigate();
//     function handlePurchase(){
//         const token = localStorage.getItem('token'); // Get the token from localStorage

//         // Check if token is available
//         if (!token) {
//             alert("Please Login to make a purchase");
//             console.error('Token not found');
//             return;
//         }

//         const orderData = {
//             token: token,
//             plan_id: plan.plan_id,
//             status: 'Pending' // Assuming status is always 'Pending' for a new order
//         };
//         console.log(orderData);

//         // Make the API call to create an order
//         fetch('https://fullstackzit.onrender.com/api/orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(orderData)
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Failed to create order');
//             }
//         })
//         .then(data => {
//             console.log('Order created successfully:', data);
//             // Handle success (maybe redirect to a success page)
//             navigate(`/success/${data.order_id}`, { state: { planName: plan.plan_name } });
//         })
//         .catch(error => {
//             console.error('Error creating order:', error);
//             // Handle error (maybe display an error message)
//         });
        
//     }
//      // Generate a random image ID (change the number for different images)
//      const imageId = Math.floor(Math.random() * 1000);

//      // URL of a random placeholder image from Lorem Picsum
//      const imageUrl = `https://picsum.photos/200/200?random=${imageId}`;
//     return (
//         <div className="plan-card">
//             <img src={imageUrl} alt="some-image" className="plan-image" />
//             <div className="plan-details">
//                 <h3 className="plan-name">{plan.plan_name}</h3>
//                 <p className="plan-description">{plan.plan_desc}</p>
//                 <p><strong>Term:</strong> {plan.plan_term}</p>
//                 <p><strong>Amount:</strong> ${plan.amount}</p>
//                 <p><strong>Expected Return:</strong> ${plan.expected_return}</p>
//                 <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
//             </div>
//         </div>
//     );
// };

// export default PlanCard;


// import React, { useState } from 'react';
// import '../styles/plancard.css';
// import { useNavigate } from 'react-router-dom';
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   TextField,
// } from '@mui/material';

// const PlanCard = ({ plan }) => {
//   const navigate = useNavigate();
//   const [showStepper, setShowStepper] = useState(false);
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   });

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handlePurchase = () => {
//     setShowStepper(true); // Show stepper form
//   };

//   const steps = [
//     'Enter your personal information',
//     'Review your order',
//     'Confirm your purchase',
//   ];

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <div>
//             <TextField
//               label="Full Name"
//               fullWidth
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//             />
//             {/* Add more fields as needed */}
//           </div>
//         );
//       case 1:
//         return (
//           <div>
//             <Typography>Plan: {plan.plan_name}</Typography>
//             <Typography>Amount: ${plan.amount}</Typography>
//             {/* Add more details about the plan */}
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <Typography variant="h6">Confirm your purchase</Typography>
//             <Typography>Full Name: {formData.fullName}</Typography>
//             <Typography>Email: {formData.email}</Typography>
//             {/* Display other form data for confirmation */}
//           </div>
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <Card className="plan-card">
//       <CardContent>
//         <div className="plan-details">
//           <img
//             src={`https://picsum.photos/200/200?random=${plan.plan_id}`}
//             alt="Plan Image"
//             className="plan-image"
//           />
//           <div className="plan-text">
//             <Typography variant="h5" gutterBottom className="plan-name">
//               {plan.plan_name}
//             </Typography>
//             <Typography variant="body1" className="plan-description">
//               {plan.plan_desc}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Term:</strong> {plan.plan_term}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Amount:</strong> ${plan.amount}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Expected Return:</strong> ${plan.expected_return}
//             </Typography>
//             {!showStepper && (
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handlePurchase}
//                 className="purchase-button"
//               >
//                 Purchase
//               </Button>
//             )}
//             {showStepper && (
//               <div className="purchase-form">
//                 <Stepper activeStep={activeStep} orientation="vertical">
//                   {steps.map((label, index) => (
//                     <Step key={label}>
//                       <StepLabel>{label}</StepLabel>
//                       <StepContent>
//                         <Typography>{getStepContent(index)}</Typography>
//                         <div>
//                           <Button disabled={activeStep === 0} onClick={handleBack}>
//                             Back
//                           </Button>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={
//                               activeStep === steps.length - 1 ? handlePurchase : handleNext
//                             }
//                           >
//                             {activeStep === steps.length - 1 ? 'Purchase' : 'Next'}
//                           </Button>
//                         </div>
//                       </StepContent>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </div>
//             )}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default PlanCard;
// import React, { useState } from 'react';
// import '../styles/plancard.css';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   TextField,
// } from '@mui/material';
// import { ScaleLoader } from 'react-spinners';
// import { css } from '@emotion/react';
// const override = css`
//   display: block;
//   margin: 0 auto;
// `;
// const PlanCard = ({ plan }) => {
//   const navigate = useNavigate();
//   const [processingPurchase, setProcessingPurchase] = useState(false);
//   const [showStepper, setShowStepper] = useState(false);
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   });

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handlePurchase = () => {
//     setShowStepper(true); // Show stepper form
//   };

//   const handleConfirmPurchase = () => {
//     // Disable button
//     setProcessingPurchase(true);
//     // Show the loader for a minimum duration
//     const minimumLoaderDuration = 30000; // milliseconds
//     // Make API call to create an order
//     const token = localStorage.getItem('token');
//     if (!token) {
//                     toast.error("Please Login to make a purchase");
//                     console.error('Token not found');
//                     setProcessingPurchase(false); 
//                     return;
//                 }
//                 const orderData = {
//                                 plan_id: plan.plan_id,
//                                 status: 'Pending' // Assuming status is always 'Pending' for a new order
//                             };

//     fetch('http://localhost:3000/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': token
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Failed to create order');
//         }
//       })
//       .then((data) => {
//         console.log('Order created successfully:', data);
//         navigate(`/success/${data.order_id}`, { state: { planName: plan.plan_name } });
//       })
//       .catch((error) => {
//         console.error('Error creating order:', error);
//       }).finally(() => {
//         setTimeout(() => {
//           setProcessingPurchase(false); // Enable button
//         }, minimumLoaderDuration);
//     });
//   };

//   const steps = [
//     'Enter your personal information',
//     'Review your order',
//     'Confirm your purchase',
//   ];

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <div>
//             <TextField
//               label="Full Name"
//               fullWidth
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//             />
          
//               <TextField
//               label="Adrress"
//               fullWidth
//               value={formData.address}
//               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//             />
          
//           </div>
//         );
//       case 1:
//         return (
//           <div>
//             <Typography>Plan: {plan.plan_name}</Typography>
//             <Typography>Amount: ${plan.amount}</Typography>
        
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <Typography variant="h6">Confirm your purchase</Typography>
//             <Typography>Full Name: {formData.fullName}</Typography>
//             <Typography>Address: {formData.address}</Typography>
//             {/* Display other form data for confirmation */}
//           </div>
//         );
//       default:
//         return 'Unknown step';
//     }
//   };
//   return (
//     <Card className="plan-card">
//       <CardContent>
//         <div className="plan-details">
//           <img
//             src={`https://picsum.photos/200/200?random=${plan.plan_id}`}
//             alt={`${plan.plan_id}`}
//             className="plan-image"
//           />
//           <div className="plan-text">
//             <Typography variant="h5" gutterBottom className="plan-name">
//               {plan.plan_name}
//             </Typography>
//             <Typography variant="body1" className="plan-description">
//               {plan.plan_desc}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Term:</strong> {plan.plan_term}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Amount:</strong> ${plan.amount}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Expected Return:</strong> ${plan.expected_return}
//             </Typography>
//             {!showStepper && (
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handlePurchase}
//                 className="purchase-button"
//               >
//                 Purchase
//               </Button>
//             )}
//             {showStepper && (
//               <div className="purchase-form">
//                 <Stepper activeStep={activeStep} orientation="vertical">
//                   {steps.map((label, index) => (
//                     <Step key={label}>
//                       <StepLabel>{label}</StepLabel>
//                       <StepContent>
//                         <Typography>{getStepContent(index)}</Typography>
//                         <div>
//                           <Button disabled={activeStep === 0} onClick={handleBack}>
//                             Back
//                           </Button>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={
//                               activeStep === steps.length - 1
//                                 ? handleConfirmPurchase
//                                 : handleNext
//                             }
//                             disabled={processingPurchase} // Disable button when processing
//                           >
//                             {/* {activeStep === steps.length - 1 ? 'Purchase' : 'Next'} */}
//                             {processingPurchase ? (
//                               <ScaleLoader css={override} color={'#ffffff'} loading={true} size={24} />
//                             ) : (
//                               activeStep === steps.length - 1 ? 'Purchase' : 'Next'
//                             )}
//                           </Button>
//                         </div>
//                       </StepContent>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </div>
//             )}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default PlanCard;

//WITH THE SELLERS
import React, { useState, useEffect } from 'react';
import '../styles/plancard.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';
const override = css`
  display: block;
  margin: 0 auto;
`;

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();
  const [processingPurchase, setProcessingPurchase] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(''); // State to store the selected seller
  const [showPurchaseButton, setShowPurchaseButton] = useState(true);

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/sales');
      if (response.ok) {
        const data = await response.json();
        setSellers(data);
      } else {
        throw new Error('Failed to fetch sellers');
      }
    } catch (error) {
      console.error('Error fetching sellers:', error);
    }
  };

  const handlePurchase = () => {
    setShowPurchaseButton(false);
  };

  const handleConfirmPurchase = () => {
    if (!selectedSeller) {
      toast.error('Please select a seller');
      return;
    }

    setProcessingPurchase(true);

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to make a purchase');
      setProcessingPurchase(false);
      return;
    }

    const orderData = {
      plan_id: plan.plan_id,
      status: 'Pending',
      name: selectedSeller, // Add selected seller to order data
    };

    fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to create order');
        }
      })
      .then((data) => {
        console.log('Order created successfully:', data);
        navigate(`/success/${data.order_id}`, { state: { planName: plan.plan_name } });
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      })
      .finally(() => {
        setProcessingPurchase(false);
        setShowPurchaseButton(true);
      });
  };

  return (
    <Card className="plan-card">
      <CardContent sx={{width: "100%"}}>
        <div className="plan-details">
          <img
            src={`https://picsum.photos/200/200?random=${plan.plan_id}`}
            alt={`${plan.plan_id}`}
            className="plan-image"
          />
          <div className="plan-text" >
            <Typography variant="h5" gutterBottom className="plan-name">
              {plan.plan_name}
            </Typography>
            <Typography variant="body1" className="plan-description">
              {plan.plan_desc}
            </Typography>
            <Typography variant="body2">
              <strong>Term:</strong> {plan.plan_term}
            </Typography>
            <Typography variant="body2">
              <strong>Amount:</strong> ${plan.amount}
            </Typography>
            <Typography variant="body2">
              <strong>Expected Return:</strong> ${plan.expected_return}
            </Typography>
            {showPurchaseButton && (
              < >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePurchase}
                  className="purchase-button"
                >
                  Purchase
                </Button>
              </>
            )}
            {!showPurchaseButton && (
              <>
                <FormControl fullWidth >
                  <label className='select-control'>Select Seller</label>
                  <Select
                    labelId="seller-select-label"
                    id="seller-select"
                    value={selectedSeller}
                    onChange={(e) => setSelectedSeller(e.target.value)}
                    style={{ paddingTop: '8px' }}
                  >
                    <MenuItem value="" style={{ marginTop: '8px' }}>
                      <em>None</em>
                    </MenuItem>
                    {sellers.map((seller) => (
                      <MenuItem key={seller.id} value={seller.name} style={{ marginTop: '8px' }} >
                        {seller.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirmPurchase}
                  disabled={!selectedSeller || processingPurchase}
                  style={{marginTop:"20px"}}
                >
                  {processingPurchase ? (
                    <ScaleLoader
                      css={override}
                      color={'#ffffff'}
                      loading={true}
                      size={24}
                    />
                  ) : (
                    'Confirm Purchase'
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanCard;



