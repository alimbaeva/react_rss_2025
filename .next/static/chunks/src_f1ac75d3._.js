(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f1ac75d3._.js", {

"[project]/src/components/errorBoundary/ErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            errorMessage: null
        };
    }
    static getDerivedStateFromError(error) {
        console.error(error);
        return {
            hasError: true,
            errorMessage: error.message
        };
    }
    handleReload = ()=>window.location.href = '/';
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }
    render() {
        const { hasError } = this.state;
        if (hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-block",
                children: [
                    this.props.fallback,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Somethig wrong is going..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/errorBoundary/ErrorBoundary.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "data-testid": "error-message",
                        children: this.state.errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/errorBoundary/ErrorBoundary.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: this.handleReload,
                        children: "Reload"
                    }, void 0, false, {
                        fileName: "[project]/src/components/errorBoundary/ErrorBoundary.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/errorBoundary/ErrorBoundary.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/veriables.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "APIKEY": (()=>APIKEY),
    "ERRORLOADING": (()=>ERRORLOADING),
    "URLAPI": (()=>URLAPI),
    "URLAPI_SEARCH": (()=>URLAPI_SEARCH),
    "headerIconColor": (()=>headerIconColor)
});
const URLAPI = 'https://api.thecatapi.com/v1';
const URLAPI_SEARCH = '/images/search?limit=10&breed_ids=';
const ERRORLOADING = 'Ошибка загрузки списка пород';
const APIKEY = 'live_jTLXI5GGxwquevnfnM4WJdb9R2nN2KBt7THZGwl6AYe7ChJvnQnrigW2VQp252SF';
const headerIconColor = '#e67a7a';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/queryApi/breedsApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "breedsApi": (()=>breedsApi),
    "useGetBreedsQuery": (()=>useGetBreedsQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/veriables.ts [app-client] (ecmascript)");
;
;
const breedsApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'breedsApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLAPI"],
        prepareHeaders: (headers)=>{
            headers.set('x-api-key', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIKEY"]);
            return headers;
        }
    }),
    endpoints: (builder)=>({
            getBreeds: builder.query({
                query: ()=>'/breeds',
                transformResponse: (response)=>{
                    const breeds = response.map((el)=>({
                            id: el.id,
                            name: el.name
                        }));
                    return {
                        data: response,
                        breeds
                    };
                }
            })
        })
});
const { useGetBreedsQuery } = breedsApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/queryApi/breedIdApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "breedIdApi": (()=>breedIdApi),
    "useGetCatsDataByBreedQuery": (()=>useGetCatsDataByBreedQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/veriables.ts [app-client] (ecmascript)");
;
;
const breedIdApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'breedIdApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLAPI"],
        prepareHeaders: (headers)=>{
            headers.set('x-api-key', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIKEY"]);
            return headers;
        }
    }),
    endpoints: (builder)=>({
            getCatsDataByBreed: builder.query({
                query: (idValue)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLAPI_SEARCH"]}${idValue}`,
                transformResponse: (response)=>{
                    return response;
                }
            })
        })
});
const { useGetCatsDataByBreedQuery } = breedIdApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/slices/breedsSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "setBreeds": (()=>setBreeds),
    "setDetaileCards": (()=>setDetaileCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/queryApi/breedsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/queryApi/breedIdApi.ts [app-client] (ecmascript)");
;
;
;
const initialState = {
    cats: [],
    breeds: [],
    detaileCards: []
};
const breedsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'breeds',
    initialState,
    reducers: {
        setBreeds (state, action) {
            state.cats = action.payload.data;
            state.breeds = action.payload.breeds;
        },
        setDetaileCards (state, action) {
            state.detaileCards = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addMatcher(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedsApi"].endpoints.getBreeds.matchFulfilled, (state, action)=>{
            state.cats = action.payload.data;
            state.breeds = action.payload.breeds;
        });
        builder.addMatcher(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedIdApi"].endpoints.getCatsDataByBreed.matchFulfilled, (state, action)=>{
            state.detaileCards = action.payload;
        });
    }
});
const { setBreeds, setDetaileCards } = breedsSlice.actions;
const __TURBOPACK__default__export__ = breedsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/slices/searchSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "setCleanSearch": (()=>setCleanSearch),
    "setCurrentPage": (()=>setCurrentPage),
    "setIdValue": (()=>setIdValue),
    "setPages": (()=>setPages),
    "setSearchValue": (()=>setSearchValue),
    "setSearchValueKey": (()=>setSearchValueKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    searchValueKey: '',
    searchValue: '',
    idValue: '',
    limit: 10,
    pages: [],
    currentPage: 0
};
const searchSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'search',
    initialState,
    reducers: {
        setSearchValueKey (state, action) {
            state.searchValueKey = action.payload;
            state.idValue = '';
            state.searchValue = '';
        },
        setSearchValue (state, action) {
            state.searchValue = action.payload;
            state.idValue = '';
            state.searchValueKey = '';
        },
        setIdValue (state, action) {
            state.idValue = action.payload;
        },
        setCleanSearch (state) {
            state.idValue = '';
            state.searchValue = '';
            state.searchValueKey = '';
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload;
        },
        setPages (state, action) {
            state.pages = action.payload;
        }
    }
});
const { setSearchValueKey, setSearchValue, setIdValue, setCleanSearch, setCurrentPage, setPages } = searchSlice.actions;
const __TURBOPACK__default__export__ = searchSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/slices/selectedSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addToSelected": (()=>addToSelected),
    "clearSelected": (()=>clearSelected),
    "default": (()=>__TURBOPACK__default__export__),
    "removeFromSelected": (()=>removeFromSelected)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    selectedData: {},
    selectedIds: [],
    dell: ''
};
const selectedSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'selected',
    initialState,
    reducers: {
        addToSelected: (state, action)=>{
            if (!state.selectedData[action.payload.id]) {
                state.selectedData[action.payload.id] = action.payload;
                state.selectedIds.push(action.payload.id);
            }
        },
        removeFromSelected: (state, action)=>{
            const { [action.payload]: trash, ...newSelectedData } = state.selectedData;
            state.dell = `${trash}`;
            state.selectedData = newSelectedData;
            state.selectedIds = state.selectedIds.filter((id)=>id !== action.payload);
        },
        clearSelected: (state)=>{
            state.selectedData = {};
            state.selectedIds = [];
        }
    }
});
const { addToSelected, removeFromSelected, clearSelected } = selectedSlice.actions;
const __TURBOPACK__default__export__ = selectedSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/queryApi/breedsApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/queryApi/breedIdApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$breedsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/breedsSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/searchSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$selectedSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/selectedSlice.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedsApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedsApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedIdApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedIdApi"].reducer,
        breeds: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$breedsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        search: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        selected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$selectedSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedsApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedsApi"].middleware).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$queryApi$2f$breedIdApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedIdApi"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/context/ThemeContext .tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setIsMounted(true);
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>{
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/context/ThemeContext .tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(ThemeProvider, "EZxsHkKHQ+mZ7AmpCKSqI8v1xoo=");
_c = ThemeProvider;
const __TURBOPACK__default__export__ = ThemeContext;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/context/useSearch.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$ThemeContext__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context/ThemeContext .tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$ThemeContext__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            setIsClient(true);
        }
    }["useTheme.useEffect"], []);
    if (!context && isClient) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context || {
        theme: 'light',
        toggleTheme: ()=>{}
    };
};
_s(useTheme, "iMlW6eB89wXRRlLRr8C+CTTc1gU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/ChooseIcone.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const ChooseIcone = ({ fill, height = '25px' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "data-testid": "logo-chooseIcone",
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        fill: fill,
        viewBox: "0 0 512 512",
        width: "100%",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M 223.29515418502203 60.89867841409691 Q 222.16740088105726 30.449339207048457 196.22907488986783 13.533039647577093 Q 169.16299559471366 0 142.09691629955947 13.533039647577093 Q 116.15859030837004 30.449339207048457 115.03083700440529 60.89867841409691 Q 116.15859030837004 91.34801762114537 142.09691629955947 108.26431718061674 Q 169.16299559471366 121.79735682819383 196.22907488986783 108.26431718061674 Q 222.16740088105726 91.34801762114537 223.29515418502203 60.89867841409691 L 223.29515418502203 60.89867841409691 Z M 222.16740088105726 225.55066079295153 Q 235.70044052863437 206.37885462555067 259.3832599118943 205.2511013215859 Q 283.06607929515417 206.37885462555067 296.59911894273125 225.55066079295153 L 351.8590308370044 314.6431718061674 L 351.8590308370044 314.6431718061674 Q 367.647577092511 337.19823788546256 387.94713656387665 346.22026431718064 Q 419.5242290748899 362.00881057268725 421.77973568281936 399.2246696035242 Q 421.77973568281936 424.0352422907489 404.86343612334804 440.9515418502203 Q 387.94713656387665 456.7400881057269 363.13656387665196 457.8678414096916 Q 343.9647577092511 457.8678414096916 330.431718061674 447.7180616740088 Q 294.3436123348018 426.29074889867843 259.3832599118943 427.4185022026432 Q 225.55066079295153 426.29074889867843 189.4625550660793 447.7180616740088 Q 174.80176211453744 457.8678414096916 155.62995594713655 457.8678414096916 Q 130.8193832599119 456.7400881057269 113.90308370044053 440.9515418502203 Q 98.11453744493392 424.0352422907489 96.98678414096916 399.2246696035242 Q 99.24229074889868 362.00881057268725 130.8193832599119 346.22026431718064 Q 151.11894273127754 337.19823788546256 166.90748898678413 314.6431718061674 L 223.29515418502203 225.55066079295153 L 222.16740088105726 225.55066079295153 Z M 120.66960352422907 285.3215859030837 Q 116.15859030837004 293.215859030837 108.26431718061674 296.59911894273125 Q 78.94273127753304 311.2599118942731 60.89867841409691 338.3259911894273 Q 42.85462555066079 365.3920704845815 42.85462555066079 399.2246696035242 Q 43.98237885462555 446.59030837004406 75.55947136563877 479.295154185022 Q 108.26431718061674 510.87224669603523 155.62995594713655 512 Q 191.71806167400882 512 219.91189427312776 491.7004405286344 Q 235.70044052863437 481.55066079295153 259.3832599118943 481.55066079295153 Q 283.06607929515417 481.55066079295153 298.8546255506608 491.7004405286344 Q 327.0484581497797 510.87224669603523 363.13656387665196 512 Q 410.5022026431718 510.87224669603523 443.20704845814976 479.295154185022 Q 474.784140969163 446.59030837004406 475.91189427312776 399.2246696035242 Q 475.91189427312776 365.3920704845815 457.8678414096916 338.3259911894273 Q 439.8237885462555 311.2599118942731 410.5022026431718 296.59911894273125 Q 402.6079295154185 293.215859030837 398.0969162995595 285.3215859030837 L 342.83700440528634 197.3568281938326 L 342.83700440528634 197.3568281938326 Q 312.38766519823787 152.24669603524228 259.3832599118943 151.11894273127754 Q 206.37885462555067 152.24669603524228 177.05726872246697 197.3568281938326 L 120.66960352422907 285.3215859030837 L 120.66960352422907 285.3215859030837 Z M 349.6035242290749 115.03083700440529 Q 380.05286343612335 113.90308370044053 396.96916299559473 87.9647577092511 Q 410.5022026431718 60.89867841409691 396.96916299559473 33.83259911894273 Q 380.05286343612335 7.894273127753304 349.6035242290749 6.766519823788546 Q 319.1541850220264 7.894273127753304 302.2378854625551 33.83259911894273 Q 288.704845814978 60.89867841409691 302.2378854625551 87.9647577092511 Q 319.1541850220264 113.90308370044053 349.6035242290749 115.03083700440529 L 349.6035242290749 115.03083700440529 Z M 512 187.20704845814979 Q 510.87224669603523 156.75770925110132 484.93392070484583 139.84140969162996 Q 457.8678414096916 126.30837004405286 430.80176211453744 139.84140969162996 Q 404.86343612334804 156.75770925110132 403.73568281938327 187.20704845814979 Q 404.86343612334804 217.65638766519822 430.80176211453744 234.5726872246696 Q 457.8678414096916 248.1057268722467 484.93392070484583 234.5726872246696 Q 510.87224669603523 217.65638766519822 512 187.20704845814979 L 512 187.20704845814979 Z M 60.89867841409691 241.33920704845815 Q 91.34801762114537 240.21145374449338 108.26431718061674 214.27312775330395 Q 121.79735682819383 187.20704845814979 108.26431718061674 160.1409691629956 Q 91.34801762114537 134.20264317180616 60.89867841409691 133.07488986784142 Q 30.449339207048457 134.20264317180616 13.533039647577093 160.1409691629956 Q 0 187.20704845814979 13.533039647577093 214.27312775330395 Q 30.449339207048457 240.21145374449338 60.89867841409691 241.33920704845815 L 60.89867841409691 241.33920704845815 Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/ChooseIcone.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/ChooseIcone.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = ChooseIcone;
const __TURBOPACK__default__export__ = ChooseIcone;
var _c;
__turbopack_context__.k.register(_c, "ChooseIcone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/logo/Logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ChooseIcone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/ChooseIcone.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/veriables.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "logo",
        "data-testid": "logo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "data-testid": "logo-h1",
                        children: "CC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/logo/Logo.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$ChooseIcone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerIconColor"],
                        "data-testid": "logo-chooseIcone"
                    }, void 0, false, {
                        fileName: "[project]/src/components/logo/Logo.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/logo/Logo.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                "data-testid": "logo-text",
                children: "Cute Cats"
            }, void 0, false, {
                fileName: "[project]/src/components/logo/Logo.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/logo/Logo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/footer/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo/Logo.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/footer/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/footer/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/CarIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const CatIcon = ({ fill, height = '25px' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "data-testid": "catIcon",
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        fill: fill,
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M 320 33 L 320 144 L 320 33 L 320 144 Q 321 178 343 201 Q 366 223 400 224 Q 434 223 457 201 Q 479 178 480 144 L 480 33 L 480 33 Q 480 32 479 32 Q 479 32 478 32 L 440 71 L 440 71 Q 431 80 417 80 L 383 80 L 383 80 Q 369 80 360 71 L 322 32 L 322 32 Q 321 32 321 32 Q 320 32 320 33 L 320 33 Z M 321 0 Q 335 0 344 10 L 383 48 L 383 48 L 417 48 L 417 48 L 456 10 L 456 10 Q 465 0 479 0 Q 493 0 502 10 Q 512 19 512 33 L 512 144 L 512 144 Q 511 192 479 223 Q 448 255 400 256 Q 352 255 321 223 Q 289 192 288 144 L 288 33 L 288 33 Q 288 19 298 10 Q 307 0 321 0 L 321 0 Z M 96 299 Q 122 253 164 220 L 164 220 L 164 220 Q 205 187 259 173 Q 262 189 269 204 Q 192 224 145 284 Q 97 343 96 424 L 96 432 L 96 432 Q 97 452 110 466 Q 124 479 144 480 L 272 480 L 272 480 L 272 480 L 272 480 L 315 480 L 315 480 Q 319 480 320 475 Q 318 450 293 448 L 256 448 L 256 448 Q 241 447 240 432 L 240 432 L 240 432 L 240 392 L 240 392 Q 240 375 228 364 Q 217 352 200 352 L 192 352 L 192 352 Q 177 351 176 336 Q 177 321 192 320 L 200 320 L 200 320 Q 231 321 251 341 Q 271 361 272 392 L 272 396 L 272 396 L 389 292 L 389 292 Q 394 288 400 288 L 400 288 L 400 288 L 400 288 L 400 288 Q 403 288 407 289 Q 415 294 416 304 L 416 464 L 416 464 Q 417 479 432 480 Q 446 479 448 464 L 448 280 L 448 280 Q 465 274 480 264 L 480 464 L 480 464 Q 479 484 466 498 Q 452 511 432 512 Q 412 511 398 498 Q 384 484 384 464 L 384 340 L 384 340 L 298 416 L 298 416 Q 321 418 336 435 Q 351 451 352 475 Q 351 490 341 501 Q 330 512 315 512 L 272 512 L 144 512 L 144 512 L 144 512 Q 110 511 87 489 Q 65 466 64 432 L 64 424 L 64 424 L 64 177 L 64 177 Q 64 158 52 145 Q 40 132 22 129 L 14 128 L 14 128 Q 0 125 0 110 Q 3 96 18 96 L 26 97 L 26 97 Q 57 102 76 124 Q 95 145 96 177 L 96 299 L 96 299 Z M 352 128 Q 353 113 368 112 Q 383 113 384 128 Q 383 143 368 144 Q 353 143 352 128 L 352 128 Z M 432 112 Q 447 113 448 128 Q 447 143 432 144 Q 417 143 416 128 Q 417 113 432 112 L 432 112 Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CarIcon.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CarIcon.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = CatIcon;
const __TURBOPACK__default__export__ = CatIcon;
var _c;
__turbopack_context__.k.register(_c, "CatIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/MooneIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MooneIcon = ({ fill, height = '25px' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "data-testid": "mooneIcon",
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        fill: fill,
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M 253.14285714285714 40 Q 218.85714285714286 72 200.57142857142858 116.57142857142857 L 200.57142857142858 116.57142857142857 L 200.57142857142858 116.57142857142857 Q 181.14285714285714 160 181.14285714285714 210.28571428571428 Q 183.42857142857142 306.2857142857143 244 371.42857142857144 Q 304.57142857142856 437.7142857142857 398.2857142857143 446.85714285714283 Q 349.14285714285717 474.2857142857143 290.85714285714283 475.42857142857144 Q 197.14285714285714 473.14285714285717 135.42857142857142 411.42857142857144 Q 73.71428571428571 349.7142857142857 71.42857142857143 256 Q 72.57142857142857 172.57142857142858 124 114.28571428571429 Q 174.28571428571428 54.857142857142854 253.14285714285714 40 L 253.14285714285714 40 Z M 328.57142857142856 14.857142857142858 Q 325.14285714285717 2.2857142857142856 311.42857142857144 1.1428571428571428 Q 301.14285714285717 0 289.7142857142857 0 Q 218.85714285714286 1.1428571428571428 161.71428571428572 35.42857142857143 Q 103.42857142857143 68.57142857142857 69.14285714285714 126.85714285714286 Q 36 184 34.857142857142854 256 Q 36 328 70.28571428571429 385.14285714285717 Q 103.42857142857143 443.42857142857144 161.71428571428572 476.57142857142856 Q 218.85714285714286 510.85714285714283 290.85714285714283 512 Q 397.14285714285717 509.7142857142857 468 440 Q 477.14285714285717 429.7142857142857 471.42857142857144 418.2857142857143 Q 465.7142857142857 406.85714285714283 452 408 Q 436 411.42857142857144 417.7142857142857 411.42857142857144 Q 333.14285714285717 409.14285714285717 276 352 Q 220 296 217.71428571428572 210.28571428571428 Q 217.71428571428572 153.14285714285714 245.14285714285714 107.42857142857143 Q 273.7142857142857 61.714285714285715 319.42857142857144 35.42857142857143 Q 330.85714285714283 28.571428571428573 328.57142857142856 14.857142857142858 L 328.57142857142856 14.857142857142858 Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/MooneIcon.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/MooneIcon.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = MooneIcon;
const __TURBOPACK__default__export__ = MooneIcon;
var _c;
__turbopack_context__.k.register(_c, "MooneIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/SunIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const SunIcon = ({ fill, height = '25px' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "data-testid": "sunIcon",
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        fill: fill,
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M 256 0 Q 271 1 272 16 L 272 96 L 272 96 Q 271 111 256 112 Q 241 111 240 96 L 240 16 L 240 16 Q 241 1 256 0 L 256 0 Z M 0 256 Q 1 241 16 240 L 96 240 L 96 240 Q 111 241 112 256 Q 111 271 96 272 L 16 272 L 16 272 Q 1 271 0 256 L 0 256 Z M 400 256 Q 401 241 416 240 L 496 240 L 496 240 Q 511 241 512 256 Q 511 271 496 272 L 416 272 L 416 272 Q 401 271 400 256 L 400 256 Z M 256 400 Q 271 401 272 416 L 272 496 L 272 496 Q 271 511 256 512 Q 241 511 240 496 L 240 416 L 240 416 Q 241 401 256 400 L 256 400 Z M 75 75 Q 86 66 98 75 L 154 132 L 154 132 Q 163 143 154 154 Q 143 164 132 154 L 75 98 L 75 98 Q 66 86 75 75 L 75 75 Z M 75 437 Q 66 426 75 414 L 132 358 L 132 358 Q 143 349 154 358 Q 164 369 154 380 L 98 437 L 98 437 Q 86 446 75 437 L 75 437 Z M 358 154 Q 349 143 358 132 L 414 75 L 414 75 Q 426 66 437 75 Q 446 86 437 98 L 380 154 L 380 154 Q 369 163 358 154 L 358 154 Z M 358 358 Q 369 349 380 358 L 437 414 L 437 414 Q 446 426 437 437 Q 426 446 414 437 L 358 380 L 358 380 Q 349 369 358 358 L 358 358 Z M 336 256 Q 335 211 296 187 Q 256 165 216 187 Q 177 211 176 256 Q 177 301 216 325 Q 256 347 296 325 Q 335 301 336 256 L 336 256 Z M 144 256 Q 144 226 159 200 L 159 200 L 159 200 Q 174 174 200 159 Q 226 144 256 144 Q 286 144 312 159 Q 338 174 353 200 Q 368 226 368 256 Q 368 286 353 312 Q 338 338 312 353 Q 286 368 256 368 Q 226 368 200 353 Q 174 338 159 312 Q 144 286 144 256 L 144 256 Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SunIcon.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/SunIcon.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = SunIcon;
const __TURBOPACK__default__export__ = SunIcon;
var _c;
__turbopack_context__.k.register(_c, "SunIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CarIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CarIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$MooneIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/MooneIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SunIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/SunIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/veriables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context/useSearch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Header.useEffect"], []);
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "right-part",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CarIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerIconColor"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-testid": "theme-toggle",
                            onClick: toggleTheme,
                            className: "theam-wrapper",
                            children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-testid": "moon-icon",
                                className: "theam-item nihgt",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$MooneIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerIconColor"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-testid": "sun-icon",
                                className: "theam-item day",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SunIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$veriables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerIconColor"],
                                    height: '30px'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header/Header.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(Header, "Z7QpNqSUoDsgtiDEPrZgDWSXwzI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MainContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context/useSearch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/Header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const MainContent = ({ children })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    console.log('MainContent');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: theme === 'light' ? 'light' : 'dark',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MainContent.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MainContent.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainContent.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_s(MainContent, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$useSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = MainContent;
const __TURBOPACK__default__export__ = MainContent;
var _c;
__turbopack_context__.k.register(_c, "MainContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ClientLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/errorBoundary/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$ThemeContext__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/context/ThemeContext .tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MainContent.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ClientLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$errorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Colling error ..."
        }, void 0, false, {
            fileName: "[project]/src/components/ClientLayout.tsx",
            lineNumber: 15,
            columnNumber: 30
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$context$2f$ThemeContext__$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientLayout.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ClientLayout.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ClientLayout.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClientLayout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = ClientLayout;
const __TURBOPACK__default__export__ = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f1ac75d3._.js.map