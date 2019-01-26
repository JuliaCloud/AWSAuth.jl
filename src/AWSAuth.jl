module AWSAuth

export SignatureV4, AWS4AuthLayer

include("signaturev4.jl")

using .SignatureV4

end # module
