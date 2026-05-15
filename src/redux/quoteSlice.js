import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchQuotes = createAsyncThunk (
    "quote/fetchQuotes",
    async () => {
        const res = await fetch ("https://dummyjson.com/quotes");
        const data = await res.json();
        return data.quotes;
    }
);

const quoteSlice = createSlice ({
    name: "quotes",
    initialState: {
        quotes: [],
        filteredQuote: null,
        loading: false,
    },

    reducers: {
        findQuoteById: (state, action) => {
            state.filteredQuote = state.quotes.find (
                (q) => q.id === Number (action.payload)
            );
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchQuotes.fulfilled, (state, action) => {
                state.loading = false;
                state.quotes = action.payload;
            })
            .addCase(fetchQuotes.rejected, (state) => {
                state.loading = false;
            })
    }
});

export const { findQuoteById } = quoteSlice.actions;
export default quoteSlice.reducer;