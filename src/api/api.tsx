import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Base URL Configuration
const API_BASE_URL = 'http://localhost:4500/api/';

// Axios Instance
const API: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Token Interceptor
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Types
interface AuthFormData {
    username: string;
    password: string;
    email?: string;
}

interface RoomData {
    RoomId: string;
}

interface StudentData {
    id: string;
}

interface OrderData {
    amount: number;
    currency: string;
}

interface PaymentVerificationData {
    orderId: string;
    paymentId: string;
}

// Authentication APIs
export const register = async (formData: AuthFormData): Promise<AxiosResponse<any>> => {
    try {
        return await API.post('/auth/register', formData);
    } catch (error) {
        console.error('Register API Error:', error);
        throw error;
    }
};

export const login = async (formData: Omit<AuthFormData, 'email'>): Promise<AxiosResponse<any>> => {
    try {
        return await API.post('/auth/login', formData);
    } catch (error) {
        console.error('Login API Error:', error);
        throw error;
    }
};

export const getProfile = async (): Promise<AxiosResponse<any>> => {
    try {
        return await API.get('/auth/profile');
    } catch (error) {
        console.error('Get Profile API Error:', error);
        throw error;
    }
};

export const logout = (): void => {
    localStorage.removeItem('token');
};

// Room APIs
export const getRooms = async (): Promise<AxiosResponse<any>> => {
    try {
        return await API.get('/rooms');
    } catch (error) {
        console.error('Get Rooms API Error:', error);
        throw error;
    }
};

export const getRoomById = async (id: string): Promise<AxiosResponse<any>> => {
    try {
        return await API.get(`/rooms/${id}`);
    } catch (error) {
        console.error('Get Room By ID API Error:', error);
        throw error;
    }
};

export const bookRoom = async (RoomId: string): Promise<AxiosResponse<any>> => {
    try {
        return await API.post('/users/purchase', { RoomId });
    } catch (error) {
        console.error('Book Room API Error:', error);
        throw error;
    }
};

// Student APIs
export const getStudents = async (): Promise<AxiosResponse<any>> => {
    try {
        return await API.get('/students');
    } catch (error) {
        console.error('Get Students API Error:', error);
        throw error;
    }
};

export const getStudentById = async (id: string): Promise<AxiosResponse<any>> => {
    try {
        return await API.get(`/students/${id}`);
    } catch (error) {
        console.error('Get Student By ID API Error:', error);
        throw error;
    }
};

// Payment APIs
export const createOrder = async (data: OrderData): Promise<AxiosResponse<any>> => {
    try {
        return await API.post('/payment/create-order', data);
    } catch (error) {
        console.error('Create Order API Error:', error);
        throw error;
    }
};

export const verifyPayment = async (data: PaymentVerificationData): Promise<AxiosResponse<any>> => {
    try {
        return await API.post('/payment/verify-payment', data);
    } catch (error) {
        console.error('Verify Payment API Error:', error);
        throw error;
    }
};
