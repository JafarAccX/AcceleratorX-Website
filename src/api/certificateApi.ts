import { api } from '.';

// This interface can be moved to a shared types file later if needed
export interface CertificateData {
  Id: string;
  CustId: number;
  BatchId: string;
  Description: string;
  Specialization: string;
  Program: string;
  CertificateURL: string;
  CertificateType: string;
  Status: string;
  IssueDate: string;
  CertificateId: string;
}

interface CertificateApiResponse {
    success: boolean;
    certificate: CertificateData;
    message?: string;
}

const certificateApi = {
  getCertificateById: async (certificateId: string): Promise<CertificateApiResponse> => {
    const response = await api.get(`/api/certificates/${certificateId}`);
    return response.data;
  },
};

export default certificateApi;
