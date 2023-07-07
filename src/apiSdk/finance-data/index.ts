import axios from 'axios';
import queryString from 'query-string';
import { FinanceDataInterface, FinanceDataGetQueryInterface } from 'interfaces/finance-data';
import { GetQueryInterface } from '../../interfaces';

export const getFinanceData = async (query?: FinanceDataGetQueryInterface) => {
  const response = await axios.get(`/api/finance-data${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFinanceData = async (financeData: FinanceDataInterface) => {
  const response = await axios.post('/api/finance-data', financeData);
  return response.data;
};

export const updateFinanceDataById = async (id: string, financeData: FinanceDataInterface) => {
  const response = await axios.put(`/api/finance-data/${id}`, financeData);
  return response.data;
};

export const getFinanceDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/finance-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFinanceDataById = async (id: string) => {
  const response = await axios.delete(`/api/finance-data/${id}`);
  return response.data;
};
