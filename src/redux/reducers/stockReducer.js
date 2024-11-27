const initialState = {
    stocks: [],          // Holds the list of stocks
    stockDetails: null,  // Holds the details of a single stock
    loading: false,      // Tracks loading state for both stocks and stock details
    error: null,         // Holds any errors that occur
};

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        // For fetching stock list
        case 'FETCH_STOCKS_REQUEST':
            return { ...state, loading: true, error: null }; // Start loading
        case 'FETCH_STOCKS_SUCCESS':
            return { ...state, loading: false, stocks: action.payload }; // Stock list fetched successfully
        case 'FETCH_STOCKS_FAILURE':
            return { ...state, loading: false, error: action.error }; // Handle error

        // For fetching stock details
        case 'FETCH_STOCK_DETAILS_REQUEST':
            return { ...state, loading: true, error: null }; // Start loading stock details
        case 'FETCH_STOCK_DETAILS_SUCCESS':
            return { ...state, loading: false, stockDetails: action.payload }; // Stock details fetched successfully
        case 'FETCH_STOCK_DETAILS_FAILURE':
            return { ...state, loading: false, error: action.error }; // Handle error

        default:
            return state;
    }
};
