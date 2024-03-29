export enum ProductListActions {
    GET_PRODUCTS_LIST_REQUEST = "GET_PRODUCTS_LIST_REQUEST",
    GET_PRODUCTS_LIST_SUCCESS = "GET_PRODUCTS_LIST_SUCCESS",
    GET_PRODUCTS_LIST_FAILURE = "GET_PRODUCTS_LIST_FAILURE",
    SET_LOADING_STATUS_LIST = "SET_LOADING_STATUS_LIST",
    DELETE_PRODUCT_FROM_LIST = "DELETE_PRODUCT_FROM_LIST",
    ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST",
};

export enum ProductDetailsActions {
    SET_PRODUCT = "SET_PRODUCT",
    SET_LOADING_STATUS_DETAILS = "SET_LOADING_DETAILS",
    OPEN_MODAL_DETAILS = "OPEN_MODAL_DETAILS",
    CLOSE_MODAL_DETAILS = "CLOSE_MODAL_DETAILS",
    GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCT_DETAILS_REQUEST",
    GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS",
    GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCT_DETAILS_FAIL",
    DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST",
    DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL",
    CLEAR_DELETE_STATUS = "CLEAR_DELETE_STATUS",
};

export enum ShoppingCartActions {
    SET_LOADING_STATUS_CART = "SET_LOADING_CART",
    CLEAR_CART = "CLEAR_CART",
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
    MODIFY_PRODUCT_QUANTITY = "MODIFY_PRODUCT_QUANTITY",
    UPDATE_PRODUCT_CART = "UPDATE_PRODUCT_CART",
    CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST",
    CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS",
    CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL",
    CLEAR_CREATE_ORDER_STATUTS = "CLEAR_CREATE_ORDER_STATUTS",
};

export enum EditableProductActions {
    SET_EDITABLE_PRODUCT = "SET_EDITABLE_PRODUCT",
    GET_EDITABLE_PRODUCT_REQUEST = "GET_EDITABLE_PRODUCT_REQUEST",
    GET_EDITABLE_PRODUCT_SUCCESS = "GET_EDITABLE_PRODUCT_SUCCESS",
    GET_EDITABLE_PRODUCT_FAIL = "GET_EDITABLE_PRODUCT_FAIL",
    CHANGE_PRODUCT_NAME = "MODIFY_PRODUCT_NAME",
    CHANGE_PRODUCT_CATEGORY = "CHANGE_PRODUCT_CATEGORY",
    CHANGE_PRODUCT_PRICE = "CHANGE_PRODUCT_PRICE",
    CHANGE_PRODUCT_IMAGE = "CHANGE_PRODUCT_IMAGE",
    CHANGE_PRODUCT_DESCRIPTION = "CHANGE_PRODUCT_DESCRIPTION",
    SET_LOADING_STATUS_EDITABLE = "SET_LOADING_STATUS_EDITABLE",
    UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST",
    UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL",
    CLEAR_UPDATE_STATUS = "CLEAR_UPDATE_STATUS",
};

export enum SalesChartsActions {
    SET_LOADING_STATUS_CHARTS = "SET_LOADING_STATUS_CHARTS",
    GET_SALES_DATA_REQUEST = "GET_SALES_DATA_REQUEST",
    GET_SALES_DATA_SUCCESS = "GET_SALES_DATA_SUCCESS",
    GET_SALES_DATA_FAIL = "GET_SALES_DATA_FAIL",
    CLEAR_GET_SALES_STATUS = "CLEAR_GET_SALES_STATUS",
    CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB",
    GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST",
    GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS",
    GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL",
};

export enum LoginActions {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    CHANGE_USERNAME = "CHANGE_USERNAME",
    CHANGE_PASSWORD = "CHANGE_PASSWORD",
    CLEAR_LOGIN_STATUS_LABEL = "CLEAR_LOGIN_STATUS_LABEL",
    LOGOUT = "LOGOUT",
};
