import { u as useQuery } from "./useQuery-pmlLw8NM.js";
import { q as Subscribable, v as shallowEqualObjects, M as hashKey, N as getDefaultState, G as notifyManager, J as useQueryClient, r as reactExports, x as noop, I as shouldThrowError, d as api, h as axios, c as _t } from "./main-pPMPSF4E.js";
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
const API_URL = "https://api.acceleratorx.org";
const customersApi = {
  // Create a new user
  createUser: async (userData) => {
    const response = await axios.post(`${API_URL}/api/user`, userData);
    return response.data;
  },
  // Get user by CustId
  getUserByCustId: async (custId) => {
    const response = await api.get(`${API_URL}/api/user/${custId}`);
    return response.data;
  },
  // Get user by Mobile
  getUserByMobile: async (number) => {
    const response = await api.get(`${API_URL}/api/user/signup/${number}`);
    return response.data;
  },
  // Update user by CustId
  updateUser: async ({ custId, userData }) => {
    const response = await api.put(`${API_URL}/api/user/${custId}`, userData);
    return response.data;
  },
  // Delete user by CustId
  deleteUser: async (custId) => {
    const response = await api.delete(`${API_URL}/api/user/${custId}`);
    return response.data;
  },
  // Apply for a job
  applyForJob: async (applicationData) => {
    const response = await api.post(`${API_URL}/api/applications`, applicationData);
    return response.data;
  },
  // Get application by ID
  getApplicationById: async (applicationId) => {
    const response = await api.get(`${API_URL}/api/applications/${applicationId}`);
    return response.data;
  },
  // Get all applications for a customer
  getCustomerApplications: async (custId) => {
    const response = await api.get(`${API_URL}/api/applications/customer/${custId}`);
    return response.data;
  },
  // Get application statistics for a customer
  getCustomerApplicationStats: async (custId) => {
    const response = await api.get(`${API_URL}/api/applications/customer/${custId}/stats`);
    return response.data;
  },
  // Check if a customer has applied to a job
  checkJobApplication: async ({ custId, jobId }) => {
    const response = await api.get(`${API_URL}/api/applications/check/${custId}/${jobId}`);
    return response.data;
  },
  // Update application status
  updateApplicationStatus: async ({
    applicationId,
    statusData
  }) => {
    const response = await api.put(`${API_URL}/api/applications/${applicationId}/status`, statusData);
    return response.data;
  },
  // Withdraw application
  withdrawApplication: async ({
    applicationId,
    withdrawData
  }) => {
    const response = await api.put(`${API_URL}/api/applications/${applicationId}/withdraw`, withdrawData);
    return response.data;
  }
};
const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: customersApi.updateUser,
    onSuccess: (data) => {
      _t.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["user", data.CustId] });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error) => {
      _t.error(
        error?.response?.data?.message || "Failed to update profile. Please try again."
      );
    }
  });
};
const useApplyForJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: customersApi.applyForJob,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["applications", variables.CustId] });
      queryClient.invalidateQueries({ queryKey: ["jobApplications", variables.JobId] });
      queryClient.invalidateQueries({
        queryKey: ["applicationCheck", variables.CustId, variables.JobId]
      });
      _t.success("Application submitted successfully!");
    }
  });
};
const useGetCustomerApplications = (custId) => {
  return useQuery({
    queryKey: ["applications", custId],
    queryFn: () => customersApi.getCustomerApplications(custId),
    enabled: !!custId
  });
};
export {
  useGetCustomerApplications as a,
  useUpdateUser as b,
  useApplyForJob as u
};
