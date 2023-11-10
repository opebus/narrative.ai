// import React, { useState, useCallback } from "react";
// import SimpleModal from "../components/SimpleModal";

// const withErrorModal = (WrappedComponent) => {
//   return (props) => {
//     const [error, setError] = useState(null);

//     const handleError = useCallback((error) => {
//       setError(error);
//     }, []);

//     const handleClose = useCallback(() => {
//       setError(null);
//     }, []);

//     return (
//       <>
//         <SimpleModal isOpen={!!error} onClose={handleClose}>
//           <h2>Error</h2>
//           <p>{error?.message || "An unknown error occurred"}</p>
//         </SimpleModal>

//         <WrappedComponent {...props} onError={handleError} />
//       </>
//     );
//   };
// };

// export default withErrorModal;
