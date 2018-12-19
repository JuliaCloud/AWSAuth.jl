module AWSAuth

export AWS4AuthRequest, AWS4AuthLayer

include("AWS4AuthRequest.jl")

using .AWS4AuthRequest

end # module
